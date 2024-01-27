import { combineReducers } from "redux";
import { addToFavItems, productReducer } from "./Productreducer";
import { selectedProductReducer } from "./Productreducer";
import { createUser } from "./Productreducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userDetails: createUser,
  favItems: addToFavItems,
});
export default reducer;
