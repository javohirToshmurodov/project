import * as types from "./actionType";

const initialState = {
  colleges: [],
  products: [],
  loading: false,
  projects: [],
  admin:{
    email:"karkasjbi@gmail.com",
    password:123456
  }
};

const collegesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COLLEGES: {
      return {
        ...state,
        colleges: action.payload,
        loading: false,
      };
    }
    case types.DELETE_COLLEGES: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default collegesReducers;
