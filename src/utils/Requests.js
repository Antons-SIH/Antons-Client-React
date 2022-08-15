import axios from "axios";

const backend = axios.create({
  baseURL: `${process.env.REACT_APP_SIH_API}`,
});

export const uploadAadhar = (file) => {
  return backend.post("/image/upload/aadhar", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const uploadPan = (file) => {
  return backend.post("/image/upload/pan", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

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
