import { combineReducers } from "redux";
import collegesReducers, { authReducer, productsReducers, projectsReducers } from "./reducers";

const rootReducer = combineReducers({
  data: collegesReducers,
  productData: productsReducers,
  projectData: projectsReducers,
  authData :authReducer
});

export default rootReducer;
