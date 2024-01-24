import React, { useEffect } from "react";
import ProductComp from "./ProductComp";
import axios from "axios";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
import { setProducts } from "../redux/action/action";


const ProductListing = () => {
<<<<<<< HEAD
  const products = useSelector((state) => state);
=======
  // const products = useSelector((state) => state);

>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
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
