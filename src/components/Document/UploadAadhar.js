import React, { useState } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { Requests } from "../../utils/Index";
import Processing from "../Processing/Processing";
import Aadharsample from "../../static/Aadharsample.jpeg";
import Otp from "../Otp/Otp";
import { Link } from "react-router-dom";
import { useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const UploadAadhar = (props) => {
  const [file, setFile] = useState();
  const [fileNames, setFileNames] = useState([]);
  const [faceImage, setFaceImage] = useState();
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setFile(acceptedFiles[0]);
  };
  const webcamRef = useRef(null);
  const [rotate, setRotate] = useState("user");
  const [image, setImage] = useState(null);
  const [imageselected, setImageselected] = useState(false);

  const videoContraints = {
    width: 300,
    height: 300,
    facingMode: { exact: rotate },
  };
  const rotateCam = () => {
    rotate === "user" ? setRotate("environment") : setRotate("user");
    setImage(null);
    console.log(rotate);
  };
  const capture = useCallback(() => {
    const imagesrc = webcamRef.current.getScreenshot();
    console.log(imagesrc);
    setImage(imagesrc);
  }, [webcamRef]);

  const handleUpload = async (e) => {
    setLoading(true);
    if (file) {
      const formData = new FormData();

      console.log(file.path);
      formData.append("email", props.userData.email);
      formData.append("file", file);
      formData.append("face", image);

      try {
        const res = await Requests.uploadAadhar(formData);
        setUploadStatus(res.data.data);
        setLoading(false);
      } catch (ex) {
        setLoading(false);
        console.log(ex);
      }
    }
    setLoading(false);
  };

  return (
    <>
      {/* {
        props.phoneVerfied ? (<> */}
      <div className="px-5 sm:px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="py-8">
          <div className="flex flex-wrap items-center mt-8 shadow-lg hover:shadow-xl hover:shadow-indigo-500/40 shadow-indigo-500/40">
            <div className="w-full md:w-5/12 mr-auto ml-auto p-2">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Instructions
              </h3>
              <ol>
                <li>1. The image should be horizontal.</li>
                <li>2. Image should not be blur.</li>
                <li>
                  3. Image should be croppted to the specific card
                  itself,background should not be present.
                </li>
                <li>4. Image should not be tilted</li>
                <li>5. Upload in standard format of *jpg, *png, *jpeg only.</li>
                <li>6. Image Size Should Not exceed 1mb.</li>
                <li>7. Don't apply any unacceptable filter to the images.</li>
                <li>
                  8. Xerox image not preffered, Please uplaod original image.
                </li>
              </ol>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">
                <img
                  alt="..."
                  src={Aadharsample}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <Dropzone
          onDrop={handleDrop}
          accept="image/jpeg, image/png, image/jpg"
          minSize={1024}
          maxSize={3072000} //till 300kb allowed
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject,
          }) => {
            const additionalClass = isDragAccept
              ? "accept"
              : isDragReject
              ? "reject"
              : "";

            return (
              <div
                {...getRootProps({
                  className: `dropzone ${additionalClass}`,
                })}
              >
                <input {...getInputProps()} />
                <span>{isDragActive ? "📂" : "📁"}</span>
                <p>Drag'n'drop images, or click to select files</p>
              </div>
            );
          }}
        </Dropzone>
        <div>
          <strong>Files:</strong>
          <ul>
            {fileNames.map((fileName) => (
              <div key={fileName}>
                {fileName ? (
                  <>
                    {fileName}
                    {!image ? (
                      <div className="webcamCapture flex flex-col justify-center my-20">
                        <Webcam
                          audio={false}
                          width={videoContraints.width}
                          height={videoContraints.height}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          videoConstraints={videoContraints}
                          className="m-auto"
                        ></Webcam>
                        <div className="flex items-baseline justify-center py-3">
                          <button
                            className="webcampCapture_button shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                            type="button"
                            onClick={capture}
                          >
                            click
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <img src={image} className="m-auto p-5" />

                        <button
                          className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded "
                          type="button"
                          onClick={handleUpload}
                          disabled={loading ? true : false}
                        >
                          {loading ? <>Uploading..</> : "Verify Yourself"}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  "Size Excedded Given Limit"
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="py-5">
          {!uploadStatus ? (
            ""
          ) : (
            <>
              {uploadStatus}
              <Processing />
            </>
          )}
        </div>
        {/* <Link to="/user/capture/aadhar">
          <button
            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded "
            type="button"
            onClick={handleUpload}
            disabled={loading ? true : false}
          >
            {loading ? <>Uploading..</> : "Take Photo"}
          </button>
        </Link> */}
      </div>
      {/*        
         ) : (
         <>
            <Otp />
          </>
        )
     } */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
    phoneVerfied: state.phoneVerfied,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadAadhar);
