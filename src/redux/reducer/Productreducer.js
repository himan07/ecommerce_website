import {
  REMOVE_SELECTED_PRODUCTS,
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
<<<<<<< HEAD
=======
  USER_ACCOUNT,
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
} from "../constant";

const initialState = {
  products: [],
};

<<<<<<< HEAD
=======
const initialUser = {
  email: "",
  password: "",
  rePassword: "",
};

>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
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
<<<<<<< HEAD
=======

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
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
