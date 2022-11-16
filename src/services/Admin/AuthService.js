import http from "../../services/HttpService";
import { API_BASE_URL_ENV } from "../../helpers/common";

const apiEndpoint = API_BASE_URL_ENV() + "/admin/user/login";
const regsiterApiEndpoint = API_BASE_URL_ENV() + "/admin/user/register";
 
const tokenKey = "token";

http.setJwt(getJwt());

//TODO refactor duplication
export async function login(credentials) {
  const { data: userData } = await http.post(apiEndpoint, credentials);
   if (userData.access_token) {
    localStorage.setItem(tokenKey, userData.access_token);
    localStorage.setItem("user_type","admin");
    localStorage.setItem(
      "auth",
      JSON.stringify({ ...userData  }),
    );
  }
  return userData;
}

export async function register(credentials) {
  const { data: userData } = await http.post(regsiterApiEndpoint, credentials);
  if (userData.access_token) {
    localStorage.setItem(tokenKey, userData.access_token);
    localStorage.setItem(
      "auth",
      JSON.stringify({ ...userData.data, user_type: "admin" }),
    );
  }
  return userData;
}
export async function forgetPassword(url, params) {
  const { data: userData } = await http.post(url, params);
   if (userData.access_token) {
    localStorage.setItem(tokenKey, userData.access_token);
    localStorage.setItem(
      "auth",
      JSON.stringify({ ...userData, user_type: "admin" }),
    );
  }
  return userData;
}

export async function resetPassword(url, params) {
  console.log(params)
  const { data: userData } = await http.post(url, params);
  return userData;
}
export async function changePassword(url, params) {
  const { data: userData } = await http.post(url, params);
  return userData;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("auth");
}

 

export function isAuthenticated() {
  return localStorage.getItem(tokenKey) ? true : false;
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
 
export default {
  login,
  loginWithJwt,
  logout,
  getJwt,
  isAuthenticated,
  resetPassword,
  changePassword,
  // register,
  forgetPassword,
};
