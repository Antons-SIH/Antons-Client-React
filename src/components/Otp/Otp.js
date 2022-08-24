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

const Otp = (props) => {
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        otp: "",
      }}
      onSubmit={console.log("verify")}
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
                {formik.errors.email && (
                  <div className="text-red-500 font-bold">
                    {formik.errors.email}
                  </div>
                )}
              </div>
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
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Otp);
