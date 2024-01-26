import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navigae = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const loginUser = () => {
    navigae("/user/login");
    loginWithRedirect();
  };

  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ecommerece App
            </Typography>
            <Button
              color="inherit"
              style={{ textTransform: "capitalize" }}
              startIcon={<AccountCircleIcon />}
              onClick={loginUser}
            >
              Login
            </Button>
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
