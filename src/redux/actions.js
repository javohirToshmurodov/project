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

export const postColleague = (colleges) => ({
  type: types.POST_COLLEGES,
  payload: colleges,
});
export const postProjects = (project) => ({
  type: types.POST_PROJECTS,
  payload: project,
});
export const postCategory = (category) => ({
  type: types.POST_CATEGORY,
  payload: category,
});
export const deleteColleague = (college) => ({
  type: types.DELETE_COLLEGES,
  payload: college,
});
export const showLoader = (loader) => ({
  type: types.SHOW_LOADER,
  payload: loader,
});
// --------------------------
// axiosinstance

// accesstoken
export const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTM4MzgwODN9.6yq14x30IXW4GqJeSL5qkDS1flM7oMyiGFYSFaJmTgw";
// accesstoken
const lang = localStorage.getItem("language") || "ru";
export const instance = axios.create({
  baseURL: "http://172.105.103.209:9091",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: "*/*",
    "Accept-Language": `${lang}`,
    "Content-Type": "application/json",
  },
});

// colleges



export const loadColleges = () => {
  return function (dispatch) {
    instance
      .get(`/api/v1/colleges/all`)
      .then((res) => {
        dispatch(getColleges(res?.data));
      })
      .catch((err) => console.log("xato", err));
  };
};
export const createColleague = () => {
  return function (dispatch) {
    instance
      .post("/api/v1/colleges/create")
      .then((res) => console.log(res?.data));
  };
};

// products
export const loadProducts = () => {
  return function (dispatch) {
    instance
      .get("/api/v1/product/all/0")
      .then((res) => {
        dispatch(getProducts(res?.data));
        console.log(res?.data);
      })
      .catch((err) => console.log("error", err));
  };
};
// products

// projects

export const loadProjects = () => {
  return function (dispatch) {
    instance
      .get("/api/v1/project/all")
      .then((res) => {
        dispatch(getProjects(res?.data));
      })
      .catch((err) => console.log("errrr", err));
  };
};
// ------------
