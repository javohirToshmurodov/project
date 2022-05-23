import { combineReducers } from "redux";
import collegesReducers, {
  authReducer,
  categoriesReducers,
  contactReducer,
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
});

export default rootReducer;
