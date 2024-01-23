import { combineReducers } from "redux";
import { productReducer } from "./Productreducer";
import { selectedProductReducer } from "./Productreducer";
import { createUser } from "./Productreducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userDetails: createUser,
});
export default reducer;
