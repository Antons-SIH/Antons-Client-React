import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import LandingPage from "./pages/home";
import Login from "./pages/auth/login";
import Profile from "./pages/user/profile";
import NavBar from "./components/NavBar/NavBar";
import Upload from "./pages/user/upload";
import Register from "./pages/auth/register";
import { connect } from "react-redux";
import UploadAadhar from "./components/Document/UploadAadhar";
import UploadPan from "./components/Document/UploadPan";
import AdminRecord from "./pages/admin/adminrecord";
import SuperRecord from "./pages/superadmin/superrecord";

function App(props) {
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      Requests.getUserByToken(token)
        .then((res) => {
          props.login(res);
        })
        .catch((error) => {
          alert("Please Login");
        });
    } else {
    }
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <Routes>
        {props.isAuthenticated ? (
          <>
            {props.userData.user_type === "User" ? (
              <>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/user/upload" element={<Upload />} />
                <Route path="/user/upload/aadhar" element={<UploadAadhar />} />
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
      </Routes>
    </div>
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
