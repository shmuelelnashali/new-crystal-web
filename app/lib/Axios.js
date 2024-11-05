import Axios from "axios";
const axios = Axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    credentials: true,
    Accept: "application/json",
  },
  timeout: 30000,
  withCredentials: true,
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error?.response?.status == 401 &&
      window.location.pathname !== "/login"
    ) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
export default axios;
