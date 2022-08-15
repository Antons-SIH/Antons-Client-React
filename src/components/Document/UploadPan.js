import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Requests } from "../../utils/Index";
import FormData from "form-data";

const UploadAadhar = (props) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState("");
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "image/png": [".png"],
        "image/jpg": [".jpg"],
      },
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });
  const form = document.querySelector("form");
  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("email", email);
    try {
      Requests.uploadPan(formData);
    } catch (e) {
      console.log(e);
    }
  };
  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        {/* <img src={file.preview} /> */}
        {file.path}
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="p-10 px-40">
      <div
        {...getRootProps({
          className: "font-bold rounded ",
        })}
      >
        <div className="flex justify-center items-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center w-full h-64 rounded-lg border-2  border-dashed cursor-pointer dark:hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              {...getInputProps()}
            />
          </label>
        </div>
      </div>
      <div className="py-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p>{thumbs}</p>
      </div>
    </div>
  );
};

export default UploadAadhar;
