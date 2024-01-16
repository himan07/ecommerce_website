import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeProducts } from "../redux/action/action";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  console.log(productId);

  const selectedProductData = useSelector((state) => state.product);
  const { id, title, price, image, category, description } =
    selectedProductData;

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.error("Error while fetching the product", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeProducts());
    };
  }, [productId]);

  return (
    <div className="ui grid container" style={{ marginTop: "25px" }}>
      {Object.keys(selectedProductData).length === 0 ? (
        <div>....loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img
                  className="ui fluid images"
                  src={image}
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown black header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
