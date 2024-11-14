import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://crystal.development.local/api",
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
      error?.response?.Status == 401 &&
      window.location.pathname !== "/login"
    ) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
export default axios;
