import React, { useState } from "react";
import Head from "next/head";
import { useFormik, Form, Field } from "formik";
import * as Yup from "yup";

import Router from "next/router";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Requests } from "../../utils/Index";
import { login } from "../../../store/actions";
import Link from "next/link";
const Register = (props) => {
  const testSchema = Yup.object().shape({
    email: Yup.string().required("Enter Email"),
    password: Yup.string().required("Enter Password"),
    first_name: Yup.string().required("Enter First Name"),
    last_name: Yup.string().required("Enter Last Name"),
    college: Yup.string().required("Enter College Name"),
    user_type: Yup.string().required("Enter College Name"),
    phone: Yup.string().required("Enter Phone Number"),
  });
  return (
    <div>
      <Formik
        validationSchema={testSchema}
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          college: "",
          user_type: "",
          phone: "",
        }}
        onSubmit={async (values) => {
          Requests.register(values)
            .then((res) => {
              props.login(res.data);
              localStorage.setItem("userinfo", res.data.token);
              Router.push("/user/profile");
              props.closeModal();
            })
            .catch(() => {});
        }}
      >
        {(formik) => (
          <div className="flex items-center justify-center bg-gray-900 py-24 text-gray-500">
            <div className="mt-4 text-left shadow-lg">
              <h1 className="text-2xl font-bold text-center">Sign Up</h1>
              {fields.map((ele) => {
                return (
                  <div key={ele}>
                    <Field
                      className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder={ele.label}
                      name={ele.name}
                      type={ele.type || "text"}
                      onChange={formik.handleChange}
                    />

                    {formik.errors[ele.name] && (
                      <div className="text-red-500 font-bold">
                        {formik.errors[ele.name]}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="mt-4">
                <Field
                  as="select"
                  name="color"
                  component="select"
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option value="red">Admin</option>
                  <option value="green">User</option>
                </Field>
              </div>
              <div className="py-3 flex items-baseline justify-between">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="button"
                  onClick={formik.handleSubmit}
                >
                  Register
                </button>
              </div>
              <div className="pb-8 px-8 flex items-baseline justify-between">
                <div>Already have an account ? </div>
                <Link href="/auth/login">
                  <div className="text-white hover:text-gray-400 font-bold cursor-pointer">
                    Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const fields = [
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "college",
    label: "College Name",
  },
  {
    name: "first_name",
    label: "First Name",
  },
  {
    name: "last_name",
    label: "Last Name",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "int",
  },
];
