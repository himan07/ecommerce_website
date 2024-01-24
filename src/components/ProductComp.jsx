import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComp = () => {
  const Products = useSelector((state) => state.allProducts.products);
  const renderList = Products.map((product) => {
    const { id, price, title, images, name } = product;

    const handleClick = (event) => {
      event.preventDefault();
    };

    return (
      <>
        <div
          className="product"
          key={id}
          style={{
            marginTop: "20px",
          }}
        >
          <Link to={`/product/${id}`}>
            <Card
              sx={{ maxWidth: 345, maxHeight: 400 }}
              style={{ padding: "20px 20px 30px 20px", height: 340 }}
            >
              <CardMedia
                component="img"
                height="194"
                src={images}
                alt={title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {name}
                </Typography>
                <div
                  className="ui vertical animated button"
                  tabIndex="0"
                  style={{
                    backgroundColor: "#000000",
                    height: "20px !importants",
                    margin: "20px 10px",
                    width: "150px",
                  }}
                  onClick={(event) => handleClick(event)}
                >
                  <div className="hidden content">
                    <i className="shop icon" style={{ color: "#ddd" }}></i>
                  </div>
                  <div className="visible content" style={{ color: "#ddd" }}>
                    Add to Cart
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </>
    );
  });

  return <>{renderList}</>;
};

export default ProductComp;
