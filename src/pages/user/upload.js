import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Upload = (props) => {
  return (
    <div className="px-32 sm-px-10">
      <div className=" mx-auto px-10 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Upload Document
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-5   bg-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Document Type
                    </th>
                    <th className="px-5 py-5   bg-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"></th>
                    <th className="px-5 py-5 bg-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"></th>
                    <th className="px-5 py-5 bg-gray-600 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-5 bg-gray-600 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Verify
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 bg-gray-800 ">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full "
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1920px-Aadhaar_Logo.svg.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" whitespace-no-wrap">Aadhar</p>
                          <p className="text-gray-400 whitespace-no-wrap">
                            {props.userData.aadhar}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 bg-gray-800 "></td>
                    <td className="px-5 py-5 bg-gray-800 "></td>
                    {props.userData.aadhar ? (
                      <td className="px-5 py-5 bg-gray-800 ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Verified</span>
                        </span>
                      </td>
                    ) : (
                      <td className="px-5 py-5 bg-gray-800 ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Not Verified</span>
                        </span>
                      </td>
                    )}
                    <td className="px-5 py-5   bg-gray-800  text-right">
                      <Link to="/user/upload/aadhar">
                        <button
                          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                          type="submit"
                        >
                          Upload
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5   bg-gray-800 ">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/31/A_sample_of_Permanent_Account_Number_%28PAN%29_Card.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" whitespace-no-wrap">Pan Card</p>
                          <p className="text-gray-400 whitespace-no-wrap">
                            {props.userData.pan}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5   bg-gray-800 "></td>
                    <td className="px-5 py-5   bg-gray-800 "></td>
                    {props.userData.pan ? (
                      <td className="px-5 py-5 bg-gray-800 ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Verified</span>
                        </span>
                      </td>
                    ) : (
                      <td className="px-5 py-5 bg-gray-800 ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Not Verified</span>
                        </span>
                      </td>
                    )}
                    <td className="px-5 py-5   bg-gray-800  text-right">
                      <Link to="/user/upload/pan">
                        <button
                          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                          type="submit"
                        >
                          Upload
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
