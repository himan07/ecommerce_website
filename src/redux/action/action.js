import {
  SET_PRODUCTS,
  SELECTED_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
  USER_ACCOUNT,
} from "../constant";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (selectedProducts) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: selectedProducts,
  };
};

export const removeProducts = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
<<<<<<< HEAD
=======
  };
};

export const createUserAccount = (userDetails) => {
  return {
    type: USER_ACCOUNT,
    payload: userDetails,
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
  };
};
