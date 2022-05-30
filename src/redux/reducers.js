import * as types from "./actionType";

const initialState = {
  colleges: [],
  categories: [],
  products: [],
  loader: false,
  projects: [],
  contacts: [],
  file: {},
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
      };
    }
    case types.DELETE_COLLEGES: {
      return {
        ...state,
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
      };
    }
    case types.POST_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case types.DELETE_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
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
      };
    }
    case types.DELETE_PROJECTS: {
      return {
        ...state,
        projects: action.payload,
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

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_CONTACT: {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case types.DELETE_CONTACT: {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case types.GET_CONTACT: {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    default:
      return state;
  }
};

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_FILE: {
      return {
        ...state,
        files: action.payload,
      };
    }
    default:
      return state;
  }
};
// loader

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER: {
      return {
        ...state,
        loader: true,
      };
    }
    case types.HIDE_LOADER: {
      return {
        ...state,
        loader: false,
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
