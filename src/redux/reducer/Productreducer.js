import {
  REMOVE_SELECTED_PRODUCTS,
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
  USER_ACCOUNT,
} from "../constant";

const initialState = {
  products: [],
};

const initialUser = {
  email: "",
  password: "",
  rePassword: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export const createUser = (state = initialUser, { type, payload }) => {
  switch (type) {
    case USER_ACCOUNT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
