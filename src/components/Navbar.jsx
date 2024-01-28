import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth0 } from "@auth0/auth0-react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const cartLength = useSelector((state) => state.cartItems.cartItems.length);
  const wishlistLength = useSelector((state) => state.favItems.favItems.length);

  const [login, setLogin] = useState(false);

  const loginUser = () => {
    navigate("/login")
    // loginWithRedirect();
    setLogin(true);
  };
  console.log("userDetails", user);

  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#595959" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ecommerece App
            </Typography>
            <Typography>
              {isAuthenticated ? (
                <img
                  src={user?.picture}
                  alt={user?.name}
                  style={{
                    borderRadius: "50%",
                    marginTop: "5px",
                    marginRight: "20px",
                  }}
                  height="50"
                  width="50"
                />
              ) : (
                ""
              )}
            </Typography>

            <Button
              color="inherit"
              startIcon={<ShoppingCartIcon />}
              style={{ textTransform: "capitalize", marginRight: "10px" }}
              onClick={() => navigate("/products/cart")}
              disabled={cartLength === 0}
            >
              Cart&nbsp;&nbsp;
              <span
                style={{
                  border:
                    cartLength === 0 ? "1px solid #595959" : "1px solid white",
                  borderRadius: "50%",
                  height: 20,
                  width: 22,
                  backgroundColor: "white",
                  color: cartLength === 0 ? "black" : "red",
                  fontWeight: "bolder",
                  fontSize: "12px",
                  paddingBottom: "20px",
                }}
              >
                {cartLength}
              </span>
            </Button>
            <Button
              color="inherit"
              endIcon={
                <FavoriteIcon
                  style={{ color: wishlistLength === 0 ? "gray" : "red" }}
                />
              }
              style={{ textTransform: "capitalize", marginRight: "10px" }}
              onClick={() => navigate("/products/wisthlist")}
              disabled={wishlistLength === 0}
            >
              Wishlist
            </Button>
            {isAuthenticated ? (
              <Button
                color="inherit"
                style={{ textTransform: "capitalize" }}
                startIcon={<ExitToAppIcon />}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </Button>
            ) : (
              <Button
                color="inherit"
                style={{ textTransform: "capitalize" }}
                startIcon={<AccountCircleIcon />}
                onClick={loginUser}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
