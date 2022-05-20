import * as types from "./actionType";

const initialState = {
  colleges: [],
  categories: {
    products: [],
  },
  loading: false,
  projects: [],
  admin: {
    username: "",
    password: "",
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
        colleges: action.payload,
      };
    }
    case types.POST_COLLEGES: {
      return {
        ...state,
        colleges: action.payload,
      };
    }
    default:
      return state;
  }
};
export const categoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.DELETE_CATEGORY: {
      return {
        ...state,
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
        loading: false,
      };
    }
    case types.DELETE_PROJECTS: {
      return {
        ...state,
      };
    }
    case types.POST_PROJECTS: {
      return {
        ...state,
        projects: action.payload,
      };
    }
    default:
      return state;
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_USER: {
      return {
        ...state,
        admin: action.payload,
      };
    }
    default:
      return state;
  }
};
export default collegesReducers;
