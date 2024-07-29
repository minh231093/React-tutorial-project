import axios from "./customize-axios";

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (first_name, last_name, email) => {
  return axios.post("/api/users", { first_name, last_name, email });
};

const putUpdateUser = (id, first_name, last_name, email) => {
  return axios.put(`/api/users/${id}`, {
    first_name,
    last_name,
    email,
  });
};

const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};

const loginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser, loginApi };
