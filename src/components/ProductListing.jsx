import React, { useEffect } from "react";
import ProductComp from "./ProductComp";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/action";


const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      console.log(response);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error while fetching the products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComp />
    </div>
  );
};

export default ProductListing;
