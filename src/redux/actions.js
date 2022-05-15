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

// DELETE_ACTIONS

// const deleteColleges = () => ({});

const instanceAxios = axios.create({
  baseURL: "http://172.105.103.209:9091/api/v1/colleges/all",
  timeout: 30000,
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly8xNzIuMTA1LjEwMy4yMDk6OTA5MS9hcGkvbG9naW4iLCJleHAiOjE2NTM0MDc1MTR9.uHdOYqz8SNV3EYh4LWG4HYpgTH3cH-orA9GUgtXsgVg",
    Accept: "*/*",
    Host: "karkas.uz",
    AcceptLanguage: "uz",
  },
});

export const loadColleges = () => {
  return function (dispatch) {
    axios
      .get(`${instanceAxios}`)
      .then((res) => {
        console.log("response", res);
        console.log("response", res.data);
        dispatch(getColleges(res.data));
      })
      .catch((err) => console.log("xato", err));
  };
};

