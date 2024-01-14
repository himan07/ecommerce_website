import {
  SET_PRODUCTS,
  SELECTED_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
} from "../constant";
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (selectedProducts) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: selectedProducts,
  };
};

export const removeProducts = (removePrdouct) => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
    payload: removePrdouct,
  };
};
