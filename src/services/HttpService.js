import axios from "axios";
import { toast } from "react-toastify";
// import https from "https";
import {
  adminPrefix,
  providerPrefix,
  studentPrefix,
} from "../configs/routePrefix";

axios.defaults.headers.common["accept-language"] = "en";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

axios.interceptors.response.use(null, async (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  console.log(error)
  console.log(error.response)
  console.log(error.response.status)

  if (error.response && error.response.status === 401) {
    // if (error.response.data.data.prefix === "admin") {
    // let AdminAuthService = await import("./Admin/Login");
    // AdminAuthService.logout();
    // window.location = `/admin/login`;
    // } else if (error.response.data.data.prefix === "client") {
    //   let AuthService = await import("./Website/AuthService");
    //   AuthService.logout();
    //   window.location = `/`;
    // }
  }
  if (!error.message) {

  } else if (!expectedError) {

    toast.error("An unexpected error occurred.");
  } else {
    toast.error(error.response.data.error);

  }

  // return Promise.reject(error);
});
 
const setToken=(token)=>{
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}



export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken
 };