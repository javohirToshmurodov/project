import axios from "axios";
import * as types from "./actionType";

// METHOD GET_ALL

export const getColleges = (colleges) => ({
  type: types.GET_COLLEGES,
  payload: colleges,
});
export const getCategory = (category) => ({
  type: types.GET_CATEGORY,
  payload: category,
});
export const getProducts = (product) => ({
  type: types.GET_PRODUCTS,
  payload: product,
});
export const getProjects = (project) => ({
  type: types.GET_PROJECTS,
  payload: project,
});
// --------------------------

// accesstoken
export const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTM0MDc1MTR9.uHdOYqz8SNV3EYh4LWG4HYpgTH3cH-orA9GUgtXsgVg";
// accesstoken

// colleges

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

// products
export const loadProducts = () => {
  return function (dispatch) {
    axios
      .get("/api/v1/product/all?categoryId=1", {
        headers: {
          Authorization: `${accessToken}`,
          Accept: "*/*",
          "Accept-Language": "uz",
        },
      })
      .then((res) => {
        console.log("products", res.data.body);
        dispatch(getProducts(res.data));
      })
      .catch((err) => console.log("error", err));
  };
};
// products

// projects

export const loadProjects = () => {
  return function (dispatch) {
    axios
      .get("/api/v1/project/all", {
        headers: {
          Authorization: `${accessToken}`,
          Accept: "*/*",
          "Accept-Language": "uz",
        },
      })
      .then((res) => {
        console.log("projects loaded = ", res.data.body);
        dispatch(getProjects(res.data));
      })
      .catch((err) => console.log("errrr", err));
  };
};
// ------------

// Authentification






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
