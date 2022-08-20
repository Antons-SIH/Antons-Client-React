import React, { useState } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { Requests } from "./../../utils/Index";
import Processing from "../Processing/Processing";
import { Link } from "react-router-dom";
import Bloader from "../ButtonLoader/Bloader";
import { toast } from "react-toastify";

const UploadAadhar = (props) => {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [fileNames, setFileNames] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(file.path);
    formData.append("email", props.userData.email);
    if (file) {
      setLoading(true);
      try {
        const res = await Requests.uploadAadhar(formData);
        toast.success(res.data.data);
        setUploadStatus(res.data.data);
        setLoading(false);
      } catch (ex) {
        console.log(ex);
        setLoading(false);
      }
    } else {
      setError("Please Upload Relevant file");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="p-10">
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
            <li key={fileName}>
              {fileName ? fileName : "Size Excedded Given Limit"}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
        type="button"
        onClick={handleUpload}
        disabled={loading ? true : false}
      >
        {loading ? <Bloader /> : "Upload"}
      </button>
      <div>
        {error}
        {!uploadStatus ? (
          ""
        ) : (
          <>
            Remark: {uploadStatus}
            <Processing />
          </>
        )}
        <div className="py-5">
          <Link to="/user/capture/aadhar">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Take a Photo
            </button>
          </Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadAadhar);
