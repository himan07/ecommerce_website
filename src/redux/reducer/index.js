import { combineReducers } from "redux";
import productReducer from "./Productreducer";

const reducer = combineReducers({
  allProducts: productReducer,
});
export default reducer;
