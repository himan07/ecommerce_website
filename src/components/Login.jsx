import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <>
      <HomeIcon
        style={{
          margin: "30px 30px 5px 50px",
          height: "30px",
          width: "30px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      />

      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "65vh",
        }}
      >
        <Card style={{ padding: "30px", width: "100%" }}>
          <Typography
            variant="h5"
            align="center"
            color="primary"
            style={{ margin: "20px" }}
          >
            Log In
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
            <a
              href=""
              style={{ float: "right", margin: "10px" }}
              onClick={() => navigate("/signup")}
            >
              Don't have an account? Signup
            </a>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Log In
            </Button>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default LoginPage;
