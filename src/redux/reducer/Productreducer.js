import { SET_PRODUCTS } from "../constant";

const initialState = {
  products: [
    {
      id: 1,
      title: "Himanshu",
      category: "Programmer",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productReducer;
