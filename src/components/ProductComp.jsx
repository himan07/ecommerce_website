import * as React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComp = () => {
  const Products = useSelector((state) => state.allProducts.products);
  const renderList = Products.map((product) => {
    const { id, title, price, image, category } = product;
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
            <Card sx={{ maxWidth: 345 }} style={{ padding: "20px" }}>
              <CardMedia
                component="img"
                height="194"
                image={image}
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
                  {category}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Link>
        </div>
      </>
    );
  });

  return <>{renderList}</>;
};

export default ProductComp;
