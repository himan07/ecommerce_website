import {
  SET_PRODUCTS,
  SELECTED_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
  USER_ACCOUNT,
  ADD_TO_WISHLISHT,
  ADD_TO_CART,
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
  };
};

export const createUserAccount = (userDetails) => {
  return {
    type: USER_ACCOUNT,
    payload: userDetails,
  };
};

export const addToFav = (products) => {
  return {
    type: ADD_TO_WISHLISHT,
    payload: products,
  };
};

export const addToCart = (products) => {
  return {
    type: ADD_TO_CART,
    payload: products,
  };
};
