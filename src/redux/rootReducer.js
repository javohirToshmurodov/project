import { combineReducers } from "redux"
import collegesReducers from "./reducers"

const rootReducer = combineReducers({
    data: collegesReducers
})

export default rootReducer