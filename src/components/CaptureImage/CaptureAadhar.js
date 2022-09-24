import React, { useState } from "react";
import { useRef, useCallback, useEffect } from "react";
import { Requests } from "../../utils/Index";
import Webcam from "react-webcam";
import { connect } from "react-redux";

const CaptureImage = (props) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file1 = (e.target.value = null);
    console.log(image);
    var formData = new FormData();
    formData.append("email", props.userData.email);
    formData.append("filestring", image);
    try {
      Requests.uplaodCapturedAadhar(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {image ? (
        <div className="flex flex-col justify-center my-20">
          <img src={image} className="m-auto"></img>
          <div className="flex items-baseline justify-center py-3">
            <button
              className="webcampCapture_button shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="button"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
}
function mapActionToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapActionToProps)(CaptureImage);
