import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../../utils/Index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Validators.email,
    password: Validators.password,
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}

      onSubmit={async (values) => {
        setLoading(true);
        Requests.login(values)
          .then((res) => {
            localStorage.setItem("userinfo", res.data.data.token);
            props.login(res);
            setLoading(false);
            navigate("/");
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            toast.error(err);
          });
      }}
    >
      {(formik) => (
        <div className="w-full h-screen py-4">
          <div className="w-80 md:w-[400px] text-center m-auto py-14 justify-center h-min">
            <h1 className="text-4xl p-4">Login</h1>
            <Form
              className="p-4 space-y-4 mx-auto "
              onSubmit={formik.handleSubmit}
            >
              <div>
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Email"}
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
              <div>
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Password"}
                  name={"password"}
                  type={"password"}
                  onChange={formik.handleChange}
                />
                {/* {formik.errors.password && (
                <div className="text-red-500 font-bold">
                  {formik.errors.password}
                </div>
              )} */}
              </div>
              <div className="flex items-baseline justify-center py-3">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="button"
                  onClick={formik.handleSubmit}
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading" : "Login"}
                </button>
              </div>
            </Form>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              draggable
              pauseOnHover
              theme="dark"
            />
            <p className="link p-1 flex space-x-2 justify-center">
              <div>Dont have an account? </div>
              <Link to="/auth/register" className="text-cyan-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}
function mapActionToProps(dispatch) {
  return {
    login: (userData) => dispatch(login(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Login);
