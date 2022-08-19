import axios from "axios";
import { email } from "./validators";

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

export const getUserType = (user_type) => {
  return backend.get("/auth/login", user_type[1]);
};

//user

export const uploadAadhar = (formData) => {
  return backend.post("/image/upload/aadhar", formData);
};

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