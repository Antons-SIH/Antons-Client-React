import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import LandingPage from "./pages/home";
import Login from "./pages/auth/login";
import Profile from "./pages/user/profile";
import NavBar from "./components/NavBar/NavBar";
import Upload from "./pages/user/upload";
import Register from "./pages/auth/register";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import UploadAadhar from "./components/Document/UploadAadhar";
import UploadPan from "./components/Document/UploadPan";
import AdminRecord from "./pages/admin/adminrecord";
import SuperRecord from "./pages/superadmin/superrecord";
import Loader from "./components/Loader/Loader";
import CaptureAadhar from "./components/CaptureImage/CaptureAadhar";
import CapturePan from "./components/CaptureImage/CapturePan";
import Team from "./pages/team/team";
import Footer from "./components/Footer/Footer";

function App(props) {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      setisLoading(true);
      Requests.getUserByToken(token)
        .then((res) => {
          props.login(res);
          setisLoading(false);
        })
        .catch((error) => {
          toast.error(error);
          setisLoading(false);
        });
    } else {
    }
  }, []);
  return (
    <>
      {!isLoading ? (
        <div className="bg-gray-900 min-h-screen text-white">
          <NavBar />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
            theme="dark"
          />
          <Routes>
            {props.isAuthenticated ? (
              <>
                {props.userData.user_type === "Student" ||
                props.userData.user_type === "Teacher" ||
                props.userData.user_type === "User" ? (
                  <>
                    <Route path="/user/profile" element={<Profile />} />
                    <Route path="/user/upload" element={<Upload />} />
                    <Route
                      path="/user/upload/aadhar"
                      element={<UploadAadhar />}
                    />
                    <Route
                      path="/user/capture/aadhar"
                      element={<CaptureAadhar />}
                    />
                    <Route path="/user/capture/pan" element={<CapturePan />} />
                    <Route path="/user/upload/pan" element={<UploadPan />} />
                  </>
                ) : props.userData.user_type === "Admin" ? (
                  <>
                    <Route path="/admin/view" element={<AdminRecord />} />
                  </>
                ) : (
                  <>
                    <Route path="/superadmin/view" element={<SuperRecord />} />
                  </>
                )}
              </>
            ) : (
              <>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
              </>
            )}
            <Route path="/" element={<LandingPage />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData) => dispatch(login(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
