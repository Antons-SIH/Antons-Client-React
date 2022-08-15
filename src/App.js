import { Route, Routes } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import LandingPage from "./pages/home";
import Login from "./pages/auth/login";
import Profile from "./pages/user/profile";
import NavBar from "./components/NavBar/NavBar";
import Upload from "./pages/user/upload"
import Register from "./pages/auth/register"
import { connect } from "react-redux";
function App(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userinfo");
    if (token) {
      console.log(token)
      Requests.getUserByToken(token)
        .then((res) => {
          
          props.login(res);
        })
        .catch((error) => {});
    } else {
    }
  }, []);
  return (
    <div className="bg-gray-900 h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
 
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData) => dispatch(login(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
