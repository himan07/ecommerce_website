import { combineReducers } from "redux";
import { productReducer } from "./Productreducer";
import { selectedProductReducer } from "./Productreducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default reducer;
