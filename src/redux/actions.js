import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import * as types from "./actionType";

// METHOD GET_ALL

const getColleges = (colleges) => ({
  type: types.GET_COLLEGES,
  payload: colleges,
});
const getCategory = (category) => ({
  type: types.GET_CATEGORY,
  payload: category,
});
const getProducts = (product) => ({
  type: types.GET_PRODUCTS,
  payload: product,
});
const getProjects = (project) => ({
  type: types.GET_PROJECTS,
  payload: project,
});
// --------------------------

// instance axios

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTM0MDc1MTR9.uHdOYqz8SNV3EYh4LWG4HYpgTH3cH-orA9GUgtXsgVg";

export const loadColleges = () => {
  return function (dispatch) {
    axios
      .get(`/api/v1/colleges/all`, {
        headers: {
          Authorization: `${accessToken}`,
          Accept: "*/*",
          "Accept-Language": "uz",
        },
      })
      .then((res) => {
        console.log("response", res.data.body);
        dispatch(getColleges(res.data));
      })
      .catch((err) => console.log("xato", err));
  };
};

export const loadProducts = () => {
  return function (dispatch) {
    axios
      .get("/api/v1/product/all", {
        headers: {
          Authorization:`${accessToken}`,
          Accept: "*/*",
          "Accept-Language": "ru",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getProducts(res.data));
      })
      .catch((err) => console.log("error", err));
  };
};

// const apiUrl = "http://172.105.103.209:9091";
// const instance = axios.create({
//   baseURL: "http://172.105.103.209:9091/api/v1/",
//   timeout: 30000,
//   headers: {
//     Authorization:
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTM0MDc1MTR9.uHdOYqz8SNV3EYh4LWG4HYpgTH3cH-orA9GUgtXsgVg",
//     Accept: "*/*",
//     Host: "karkas.uz",
//     "Accept-Language": "uz",
//   },
// });
// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
