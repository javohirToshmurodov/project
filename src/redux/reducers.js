import * as types from "./actionType";

const initialState = {
  colleges: [],
  products: [],
  loading: false,
  projects: [],
  admin: {
    email: "karkasjbi@gmail.com",
    password: 123456,
  },
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

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }
    case types.POST_PRODUCTS: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.DELETE_PRODUCTS: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export const projectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS: {
      return {
        ...state,
        projects: action.payload,
        loading:false
      };
    }
    case types.DELETE_PROJECTS:{
      return{
        ...state
      }
    }
    case types.POST_PROJECTS:{
      return {
        ...state
      }
    }
    default:
      return state
  }
};
export default collegesReducers;
