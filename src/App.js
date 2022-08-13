import { Route, Routes } from "react-router";
import LandingPage from "./pages/home";
import Login from "./pages/auth/login";
import Profile from "./pages/user/profile";
import NavBar from "./components/NavBar/NavBar";
function App(props) {
  return (
    <div className="bg-gray-900 h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Login />} />
        <Route path="/user/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
