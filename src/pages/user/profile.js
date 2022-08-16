import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <div>
      <div className="antialiased w-full h-full text-gray-400 font-inter p-10">
        <div className="container px-4 mx-auto">
          <div>
            <div id="title" className="text-center my-10">
              <h1 className="font-bold text-4xl text-white">
                {props.userData.name}
              </h1>
              <p className="text-light text-gray-500 text-xl">
                Verified Documents
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
              <div
                id="plan"
                className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div
                  id="title"
                  className="w-full py-5 border-b border-gray-800"
                >
                  <h2 className="font-bold text-3xl text-white">Aadhar</h2>
                  {props.userData.aadhar ? (
                    <h3 className="font-normal  text-xl mt-2 text-green-500">
                      Verified
                    </h3>
                  ) : (
                    <h3 className="font-normal  text-xl mt-2 text-red-500">
                      Not Verified
                    </h3>
                  )}
                </div>
                <div id="content" className="">
                  <div id="icon" className="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm pt-2">
                      Verified On :
                      {props.userData.aadhar_date === "None"
                        ? "Not yet Verified"
                        : props.userData.aadhar_date.substring(0, 10)}
                    </p>
                  </div>
                  <div
                    id="contain"
                    className="leading-8 mb-10 text-lg font-light"
                  >
                    <ul>
                      <li>Size: 2 MB size</li>
                      <li className="font-bold">
                        Remark - {props.userData.aadhar_remark}
                      </li>
                    </ul>
                    <div id="verify" className="w-full mt-10 px-6">
                      <a
                        href="/user/upload/aadhar"
                        className="w-full block bg-gray-800 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        {props.userData.aadhar ? "verify again" : " verify"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="plan"
                className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div
                  id="title"
                  className="w-full py-5 border-b border-gray-800"
                >
                  <h2 className="font-bold text-3xl text-white">Pan Card</h2>
                  {props.userData.pan ? (
                    <h3 className="font-normal  text-xl mt-2 text-green-500">
                      Verified
                    </h3>
                  ) : (
                    <h3 className="font-normal  text-xl mt-2 text-red-500">
                      Not Verified
                    </h3>
                  )}
                </div>
                <div id="content" className="">
                  <div id="icon" className="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm pt-2">
                      Verified On :{" "}
                      {props.userData.pan_date === "None"
                        ? "Not yet Verified"
                        : props.userData.pan_date.substring(0, 10)}
                    </p>
                  </div>
                  <div
                    id="contain"
                    className="leading-8 mb-10 text-lg font-light"
                  >
                    <ul>
                      <li>Size: 2 MB size</li>
                      <li className="font-bold">
                        Remark - {props.userData.pan_remark}
                      </li>
                    </ul>
                    <div id="verify" className="w-full mt-10 px-6">
                      <a
                        href="/user/upload/pan"
                        className="w-full block bg-gray-800 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        {props.userData.pan ? "verify again" : " verify"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="plan"
                className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div
                  id="title"
                  className="w-full py-5 border-b border-gray-800"
                >
                  <h2 className="font-bold text-3xl text-white">
                    Bank Details
                  </h2>
                  {props.userData.seseded_bank_acc ? (
                    <h3 className="font-normal  text-xl mt-2 text-green-500">
                      Verified
                    </h3>
                  ) : (
                    <h3 className="font-normal  text-xl mt-2 text-red-500">
                      Not Verified
                    </h3>
                  )}
                </div>
                <div id="content" className="">
                  <div id="icon" className="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm pt-2">
                      Verified On :{" "}
                      {props.userData.seeded_date === "None"
                        ? "Not yet Verified"
                        : props.userData.seeded_date.substring(0, 10)}
                    </p>
                  </div>
                  <div
                    id="contain"
                    className="leading-8 mb-10 text-lg font-light"
                  >
                    <ul>
                      <li>Size: 2 MB size</li>
                      <li className="font-bold">
                        Remark - {props.userData.seeded_remark}
                      </li>
                    </ul>
                    <div id="verify" className="w-full mt-10 px-6">
                      <a
                        href="/user/upload"
                        className="w-full block bg-gray-800 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        {props.userData.seeded_bank_acc
                          ? "verify again"
                          : " verify"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
