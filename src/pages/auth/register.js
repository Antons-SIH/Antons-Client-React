import React, { useState } from "react";
import { useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Requests } from "../../utils/Index";
import { login } from "../../store/actions";

const Register = (props) => {
  let navigate = useNavigate();
  const [loading,setLoading] = useState(false);
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
    <Formik
      initialValues={{
        email: "",
        password: "",
        first_name:"",
        last_name:"",
        college: "",
        user_type: "",
        phone: "",
      }}
       // validationSchema={validate}

      onSubmit={async (values) => {
        setLoading(true);
        Requests.register(values)
          .then((res) => {
            setLoading(false)
            navigate("/auth/login")
          })
          .catch((err) => {
            setLoading(false)
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <div className="w-full h-screen ">
          <div className="w-80 md:w-[400px] text-center m-auto py-14 justify-center h-min">
            <h1 className="text-4xl p-4">Register</h1>
            <Form
              className="p-4 space-y-4 mx-auto "
              onSubmit={formik.handleSubmit}
              validationSchema={testSchema}
            >
               <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"First Name"}
                name={"first_name"}
                type={"first_name"}
                onChange={formik.handleChange}
              />
           
            </div>
            <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"Last Name"}
                name={"last_name"}
                type={"last_name"}
                onChange={formik.handleChange}
              />
           
            </div>
             <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"email"}
                name={"email"}
                type={"email"}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <div className="text-red-500 font-bold">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"Password"}
                name={"password"}
                type={"password"}
                onChange={formik.handleChange}
              />
              {formik.errors.password && (
                <div className="text-red-500 font-bold">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"College Name"}
                name={"college"}
                type={"college"}
                onChange={formik.handleChange}
              />
            </div>
            <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"Phone number"}
                name={"phone"}
                type={"phone"}
                onChange={formik.handleChange}
              />
            </div>
            <div className="">
              <Field
                className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder={"user type"}
                name={"user_type"}
              type={"user_type"}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex items-baseline justify-center py-3">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
                onClick={formik.handleSubmit}
                disabled={loading?true:false}
              >
               
                {loading ?"Loading":"Register"}
              </button>
            </div>
            </Form>
            {/* <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              draggable
              pauseOnHover
              theme="dark"
            /> */}
            <p className="link p-1 flex space-x-2 justify-center text-black">
              <div> have an account ? </div>
              <Link to="/auth/login" className="text-cyan-500">
                login
              </Link>
            </p>
          </div>
        </div>
      )}
    </Formik>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
