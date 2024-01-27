import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WishList = () => {
  const navigate = useNavigate();
  const favItemsWishlist = useSelector((state) => state.favItems.favItems);
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
      {favItemsWishlist.map((item, id) => (
        <div
          className="ui grid container"
          style={{ height: window.innerHeight - 300, marginBottom:"20px" }}
        >
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column 1p">
                  <img
                    className="ui fluid images"
                    src={item.images}
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div className="column rp">
                  <h2>
                    <a className="ui teal tag label">${item.price}</a>
                  </h2>
                  <h3 className="ui black header" style={{ fontSize: "14px" }}>
                    {item.description}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishList;
