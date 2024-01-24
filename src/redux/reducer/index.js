import { combineReducers } from "redux";
import { productReducer } from "./Productreducer";
import { selectedProductReducer } from "./Productreducer";
<<<<<<< HEAD
=======
import { createUser } from "./Productreducer";
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
<<<<<<< HEAD
=======
  userDetails: createUser,
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
});
export default reducer;
