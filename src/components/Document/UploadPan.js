import React, { useState } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { Requests } from "./../../utils/Index";
import { Link } from "react-router-dom";
import Bloader from "../ButtonLoader/Bloader";
import Pansample from "../../static/Pansample.jpeg"

const UploadPan = (props) => {
  const [file, setFile] = useState();
  const [fileNames, setFileNames] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", props.userData.email);
    try {
      const res = await Requests.uploadAadhar(formData);
      setUploadStatus(res.data.data);
      setLoading(false);
    } catch (ex) {
      setLoading(false);
      console.log(ex);
    }
    setLoading(false);
  };
  return (
    <div className="p-10">
      <div className="flex flex-wrap border-solid border-2 border-white-600 mb-5 p-4 rounded text-white">
        <ul>
          <li>1. The image should be horizontal</li>
          <li>2. Image should not be blur</li>
          <li>3. Image should be croppted to the specific card itself,background should not be present</li>
          <li>4. Image should not be tilted</li>
          <li>5. Upload in standard formate as shown in image below</li>
          <li>6. Don't apply any unacceptable filter to the images</li>
          <li>7. xerox image not preffered, Please uplaod original image</li>
        </ul>
      </div>
      
      <div className="flex flex-wrap border-solid border-2 border-white-600 mb-5 p-4 rounded text-white justify-center f">
       <img src={Pansample} className="h-56 w-96" />
      </div>
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
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
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
      <button
        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
        type="button"
        onClick={handleUpload}
        disabled={loading ? true : false}
      >
        {loading ? (<Bloader />): "Upload"}
      </button>
      <div>{uploadStatus}</div>
      <div className="py-5">
        <Link to="/user/capture/pan"  >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        
        >
          Take a Photo
        </button>
        </Link>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPan);
