import axios from "axios";

const backend = axios.create({
  baseURL: `${process.env.REACT_APP_SIH_API}`,
});

export const submitFile = (file) => {
  return backend.post("/image/upload", file, {
    headers: {
      "Content-Type": file.type,
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
  return backend.get("/auth/login", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUserType = (user_type) => {
  return backend.get("/auth/login", user_type[1]);
};