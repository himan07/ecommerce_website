import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Cart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const cartData = useSelector((state) => state.cartItems.cartItems);
  

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
      {cartData.map((item, id) => (
        <div
          key={id}
          className="ui grid container"
          style={{ height: window.innerHeight - 300,marginBottom: "50px" }}
        >
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column 1p">
                  <img
                    className="ui fluid images"
                    src={item.images}
                    style={{ height: "350px", width: "350px" }}
                    alt={item.title}
                  />
                </div>
                <div className="column rp">
                  <h1>{item.title}</h1>
                  <h2>
                    <a className="ui teal tag label">${item.price}</a>
                  </h2>
                  <h3 className="ui  black header" style={{ fontSize: "14px" }}>
                    {item.description}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
