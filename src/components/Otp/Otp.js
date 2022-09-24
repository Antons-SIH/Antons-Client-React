import React, { useEffect, useState } from "react";
import { Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Requests } from "../../utils/Index";
import { login } from "../../store/actions";
import { toast } from "react-toastify";
import { phoneverified } from "../../store/actions";

const Otp = (props) => {
  const [data, setData] = useState("");
  const [otpCondition,setOtpCondition] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("userinfo");
  return (
    <>
    {  
        otpCondition ? ( 
          <Formik
          initialValues={{
            otp: "",
          }}
          onSubmit={async (values) => {
            setLoading(true);
            console.log(values);
            Requests.verifyPhoneOtp(values)
            .then((res) => {
              props.phoneVerfied();
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              console.log(err.response.data.error.message);
              toast.error(err.response.data.error.message);
            })
          }
        }
        
        >
          {(formik) => (
            <div className="w-full min-h-screen ">
              <div className="w-80 md:w-[400px] text-center m-auto py-14 justify-center h-min">
                <h1 className="text-4xl p-4">Verify Your Upload</h1>
                <Form
                  className="p-4 space-y-4 mx-auto "
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <Field
                      className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder={"otp"}
                      name={"otp"}
                      type={"otp"}
                      onChange={formik.handleChange}
                    />
                  
                  <div className="flex items-baseline justify-center py-3">
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="button"
                      onClick={formik.handleSubmit}
                      disabled={loading ? true : false}
                    >
                      {loading ? "Loading" : "Verify"}
                    </button>
                  </div>
                  </div> 
                </Form>
              </div>
            </div>
          )}
        </Formik>
        
        ):(
        
          <Formik
          initialValues={{
            aadhar_phone: "",
          }}
          onSubmit={async (values) =>{
            console.log(values);
            Requests.sendOtp(values)
            .then((res) => {
              setOtpCondition(true);
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              console.log(err.response.data.error.message);
              toast.error(err.response.data.error.message);
            })
          }}
        >
          {(formik) => (
            <div className="w-full min-h-screen ">
              <div className="w-80 md:w-[400px] text-center m-auto py-14 justify-center h-min">
                <h1 className="text-4xl p-4">Verify Your Upload</h1>
                <Form
                  className="p-4 space-y-4 mx-auto "
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <Field
                      className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder={"aadhar_phone"}
                      name={"aadhar_phone"}
                      type={"aadhar_phone"}
                      onChange={formik.handleChange}
                    />
                   
                  </div>
                  <div className="flex items-baseline justify-center py-3">
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="button"
                      onClick={formik.handleSubmit}
                      disabled={loading ? true : false}
                    >
                      {loading ? "Submitting" : "Submit"}
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
        
        )
    }
    
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    phoneVerfied:state.phoneVerfied
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    phoneVerfied: () => dispatch(phoneverified())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Otp);
