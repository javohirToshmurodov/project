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

export const getContacts = (contacts) => ({
  type: types.GET_CONTACT,
  payload: contacts,
});

// get finished

// post zapros
export const postContacts = (contacts) => ({
  type: types.POST_CONTACT,
  payload: contacts,
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
export const postProducts = (products) => ({
  type: types.POST_PRODUCTS,
  payload: products,
});
export const postFile = (files) => ({
  type: types.POST_FILE,
  payload: files,
});

// post finished

// delete zapros
export const deleteColleague = (college) => ({
  type: types.DELETE_COLLEGES,
  payload: college,
});
export const deleteProjects = (projects) => ({
  type: types.DELETE_PROJECTS,
  payload: projects,
});
export const deleteContacts = (contacts) => ({
  type: types.DELETE_CONTACT,
  payload: contacts,
});
export const deleteProducts = (products) => ({
  type: types.DELETE_PRODUCTS,
  payload: products,
});

// delete finished
export const showLoader = (loader) => ({
  type: types.SHOW_LOADER,
  payload: loader,
});
//  put = edit
export const putProducts = (products) => ({
  type: types.PUT_PRODUCTS,
  payload: products,
});
export const putCategory = (category) => ({
  type: types.PUT_CATEGORY,
  payload: category,
});
export const putColleges = (colleges) => ({
  type: types.PUT_COLLEGES,
  payload: colleges,
});
// --------------------------

// axiosinstance

// accesstoken
export const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTQ3ODczODF9.VGqNALAf0UKx-tBl-DqK6v6yJaFMwfmR_AGBlNJP_K0";
// accesstoken
export const lang = localStorage.getItem("language") || "ru";
export const instance = axios.create({
  baseURL: "http://172.105.103.209:9091",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: "*/*",
    "Accept-Language": `${lang}`,
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

// products

export const loadProductsAll = () => {
  return function (dispatch) {
    instance
      .get("/api/v1/product/all")
      .then((res) => {
        dispatch(getProducts(res?.data));
        console.log(res?.data);
      })
      .catch((err) => console.log(err));
  };
};

export const loadCategories = () => {
  return function (dispatch) {
    instance
      .get("/api/v1/category/all")
      .then((res) => {
        dispatch(getCategory(res?.data));
      })
      .catch((err) => console.log(err));
  };
};

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

// contacts
export const loadContacts = () => {
  return function (dispatch) {
    instance
      .get("/api/v1/contact/all")
      .then((res) => {
        dispatch(getContacts(res?.data));
      })
      .catch((err) => console.log(err));
  };
};
