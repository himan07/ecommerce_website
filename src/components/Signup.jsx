import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";




const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Signup successful:", userCredential.user);
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
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
            Sign Up
          </Typography>
          <form onSubmit={handleSignup}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Sign Up
            </Button>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default SignupPage;
