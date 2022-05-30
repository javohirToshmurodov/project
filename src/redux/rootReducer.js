import { combineReducers } from "redux";
import collegesReducers, {
  authReducer,
  categoriesReducers,
  contactReducer,
  fileReducer,
  productsReducers,
  projectsReducers,
} from "./reducers";

const rootReducer = combineReducers({
  data: collegesReducers,
  productData: productsReducers,
  projectData: projectsReducers,
  authData: authReducer,
  contactData: contactReducer,
  categoryData: categoriesReducers,
  fileData: fileReducer,
});

export default rootReducer;
