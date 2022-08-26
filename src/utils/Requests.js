import axios from "axios";
import { email } from "./validators";
const token = localStorage.getItem("userinfo")

const backend = axios.create({
  baseURL: "https://aryanagrawal.in/api",
});

//auth

export const register = (data) => {
  return backend.post("/auth/register", data);
};

export const login = (data, config) => {
  return backend.post("/auth/login", data, config);
};

export const getUserByToken = (token) => {
  return backend.get("/auth/profile", {
    headers: { Authorization: `${token}` },
  });
};
export const verifyOtp = (data) => {
  return backend.post("/auth/verify", data);
};


export const getUserType = (user_type) => {
  return backend.get("/auth/login", user_type[1]);
};

export const sendOtp = (data) => {
  console.log(data)
  return backend.post("/phone/sendotp", data,{
    headers: { Authorization: `${token}` },
  });
};

export const verifyPhoneOtp = (data) => {
  return backend.post("/phone/verifyotp", data,{
    headers: { Authorization: `${token}` },
  });
};

// export const sendOtp = ({data,token}) =>{
//   return backend.post("/phone/sendotp", data,{
//     headers: { Authorization: `${token}` },
//   });
// }
// export const verifyOtp = ({data,token}) =>{
//   return backend.post("/phone/verifyotp", data,{
//     headers: { Authorization: `${token}` },
//   });
// }


//user

export const uploadAadhar = (formData) => {
  return backend.post("/image/upload/aadhar", formData);
};
export const uplaodCapturedAadhar = (formData) =>{
  return backend.post("/image/phone/aadhar", formData);
}

export const uploadPan = (file, email) => {
  return backend.post("/image/upload/pan", file, email, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// admin

export const getAdminDetails = (token) => {
  return backend.get("/details/admin", {
    headers: { Authorization: `${token}` },
  });
};

// super admin

export const getSuperAdminDetails = (token) => {
  return backend.get("/details/super", {
    headers: { Authorization: `${token}` },
  });
};

// get colleges

export const getColleges = (data) => {
  return backend.get("/college", data);
};

// bulk validation

export const sendUserMail = (token) => {
  return backend.get("/verify/admin", {
    headers: { Authorization: `${token}` },
  });
};

export const sendAdminMail = (token) => {
  return backend.get("/verify/super", {
    headers: { Authorization: `${token}` },
  });
};
