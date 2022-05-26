import axios from "axios";
import { products } from "../data";
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
export const postProducts = (products)=>({
  type:types.POST_PRODUCTS,
  payload:products
})

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

// delete finished
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
export const lang = localStorage.getItem("language") || "ru";
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
// export const createColleague = () => {
//   return function (dispatch) {
//     instance
//       .post("/api/v1/colleges/create")
//       .then((res) => console.log(res?.data));
//   };
// };

// products

// products

// categories

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
        console.log(res?.data);
      })
      .catch((err) => console.log(err));
  };
};
