import { combineReducers } from "redux";
import collegesReducers, { authReducer, categoriesReducers, productsReducers, projectsReducers } from "./reducers";

const rootReducer = combineReducers({
  data: collegesReducers,
  productData: productsReducers,
  projectData: projectsReducers,
  authData :authReducer,
  categoryData:categoriesReducers
});

export default rootReducer;
