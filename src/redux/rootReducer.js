import { combineReducers } from "redux";
import collegesReducers, { productsReducers, projectsReducers } from "./reducers";

const rootReducer = combineReducers({
  data: collegesReducers,
  productData: productsReducers,
  projectData: projectsReducers
});

export default rootReducer;
