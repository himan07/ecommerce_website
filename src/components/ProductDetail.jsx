import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeProducts } from "../redux/action/action";
<<<<<<< HEAD
=======
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f

  // console.log(productId);

  const selectedProductData = useSelector((state) => state.product);
  const { price, title, description, images } = selectedProductData;

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${productId}`
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

<<<<<<< HEAD
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
                  src={images}
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown black header">{description}</h3>
                <div
                  className="ui vertical animated button"
                  tabIndex="0"
                  style={{ backgroundColor: "#000000" }}
                >
                  <div className="hidden content">
                    <i className="shop icon" style={{ color: "#ddd" }}></i>
                  </div>
                  <div className="visible content" style={{ color: "#ddd" }}>
                    Add to Cart
=======
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <HomeIcon
        style={{
          margin: "20px 30px 5px 30px",
          height: "30px",
          width: "30px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      />
      <div
        className="ui grid container"
        style={{ height: window.innerHeight - 200, marginTop: "20px" }}
      >
        {Object.keys(selectedProductData).length === 0 ? (
          <div>....loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column 1p">
                  <img
                    className="ui fluid images"
                    src={images}
                    style={{ height: "500px", width: "500px" }}
                  />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui  black header" style={{ fontSize: "14px" }}>
                    {description}
                  </h3>
                  <div
                    className="ui vertical animated button"
                    tabIndex="0"
                    style={{ backgroundColor: "#000000" }}
                  >
                    <div className="hidden content">
                      <i className="shop icon" style={{ color: "#ddd" }}></i>
                    </div>
                    <div className="visible content" style={{ color: "#ddd" }}>
                      Add to Cart
                    </div>
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      )}
    </div>
=======
        )}
      </div>
    </>
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
  );
};

export default ProductDetail;
