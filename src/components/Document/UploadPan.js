import React, { useState } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { Requests } from "./../../utils/Index";
import { Link } from "react-router-dom";

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
        {loading ? "Uploading.." : "Upload"}
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
