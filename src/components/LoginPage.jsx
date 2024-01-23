import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100% !important",
    width: "100%",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "500px",
    textAlign: "center",
    margin: "150px 20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    textAlign: "left",
    color: "#333",
  },
  input: {
    padding: "10px",
    marginBottom: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    backgroundColor: "rgb(5, 100, 200)",
    color: "#fff",
    padding: "12px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  signupText: {
    marginTop: "16px",
    color: "#666",
  },
};

const LoginPage = () => {
  const navigate = useNavigate();

  const signUpfn = (e) => {};

  return (
    <>
      <HomeIcon
        onClick={() => navigate("/")}
        style={{
          margin: "20px 30px 5px 30px",
          height: "30px",
          width: "30px",
          cursor: "pointer",
        }}
      />
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>Login</h2>
          <form style={styles.form}>
            <input
              type="text"
              style={styles.input}
              placeholder="Enter your email"
            />

            <input
              type="password"
              style={styles.input}
              placeholder="Enter your password"
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>

          <p style={styles.signupText}>
            Don't have an account? <Link to="/user/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
