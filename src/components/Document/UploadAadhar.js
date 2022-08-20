import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Dropzone, { useDropzone } from "react-dropzone";
import { Requests } from "./../../utils/Index";
import Processing from "../Processing/Processing";
import { Link } from "react-router-dom";
import Aadharsample from "../../static/Aadharsample.jpeg"


const data =[
  {
  title:"first"
  },
  {
   title: "second"
  }
 
]


const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const UploadAadhar = (props) => {
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
    console.log(file.path)
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
      <div className="flex flex-wrap justify-around  border-solid border-2 border-white-600 mb-5">
      <div className="flex flex-wrap  mb-5 p-4 rounded text-white">
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
      
      <div className="flex flex-wrap mb-5  p-4 rounded text-white justify-center f">
    
       <img src={Aadharsample} className="h-56 w-96" />
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
            <li key={fileName}>
              {fileName ? fileName : "Size Excedded Given Limit"}
            </li>
          ))}
        </ul>
      </div>
      
      <button
        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded "
        type="button"
        onClick={handleUpload}
        disabled={loading ? true : false}
      >
        {loading ? <>Uploading..</> : "Upload"}
      </button>
      <div>
        {!uploadStatus ? (
          ""
        ) : (
          <>
            {uploadStatus}
            <Processing />
          </>
        )}
     
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
