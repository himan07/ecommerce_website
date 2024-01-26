import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth0 } from "@auth0/auth0-react";

const ProductComp = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { productId } = useParams();
  const Products = useSelector((state) => state.allProducts.products);

  const [favStatus, setFavStatus] = useState(
    Products.reduce((acc, product) => {
      acc[product.id] = false;
      return acc;
    }, {})
  );

  const renderList = Products.map((product) => {
    const { id, price, title, images, name } = product;

    const handleAddToFav = (e) => {
      e.preventDefault();
      setFavStatus((prev) => ({ ...prev, [id]: true }));

      if (isAuthenticated) {
      } else {
        loginWithRedirect();
      }
    };

    const handleRemoveFav = (e) => {
      e.preventDefault();
      setFavStatus((prev) => ({ ...prev, [id]: false }));
    };

    return (
      <div
        className="product"
        key={id}
        style={{
          margin: "20px 0px 20px 10px",
        }}
      >
        <Link to={`/product/${id}`}>
          <Card
            sx={{ maxWidth: 345, maxHeight: 400 }}
            style={{
              padding: "20px 20px 30px 20px",
              height: 340,
              width: 250,
            }}
          >
            {isAuthenticated && favStatus[id] ? (
              <FavoriteIcon
                style={{ color: "red", float: "right", margin: "10px 0px" }}
                onClick={(e) => handleRemoveFav(e)}
              />
            ) : (
              <FavoriteBorderIcon
                style={{ float: "right", margin: "10px 0px" }}
                onClick={(e) => handleAddToFav(e)}
              />
            )}

            <CardMedia
              component="img"
              height="200"
              src={
                typeof images === "string" &&
                images.startsWith('["') &&
                images.endsWith('"]')
                  ? images.slice(2, -2)
                  : images
              }
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
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComp;
