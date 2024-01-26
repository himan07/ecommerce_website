import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navigae = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [login, setLogin] = useState(false);

  const loginUser = () => {
    loginWithRedirect();
    setLogin(true);
  };
  console.log("userDetails", user);

  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "black" }}>
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
                    marginRight: "10px",
                  }}
                  height="50"
                  width="50"
                />
              ) : (
                ""
              )}
            </Typography>
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

            <Button
              color="inherit"
              startIcon={<ShoppingCartIcon />}
              style={{ textTransform: "capitalize" }}
            >
              Cart
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
