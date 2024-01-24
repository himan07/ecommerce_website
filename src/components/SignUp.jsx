import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { createUserAccount } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
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

const SignUpPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleChangeEmail = (e) => {
    const emailValue = e.target.value;
    console.log(emailValue);
    dispatch(createUserAccount({ ...userDetails, email: emailValue }));
  };

  const handleChangePassword = (e) => {
    const passwordValue = e.target.value;
    dispatch(createUserAccount({ ...userDetails, password: passwordValue }));
  };

  const handleRePassword = (e) => {
    const rePasswordValue = e.target.value;
    dispatch(
      createUserAccount({ ...userDetails, rePassword: rePasswordValue })
    );
  };

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
          <h2 style={styles.heading}>SignUp</h2>
          <form style={styles.form}>
            <input
              type="text"
              style={styles.input}
              placeholder="Enter your email"
              onChange={(e) => handleChangeEmail(e)}
            />

            <input
              type="password"
              style={styles.input}
              placeholder="Enter your password"
              onChange={(e) => handleChangePassword(e)}
            />
            <input
              type="password"
              style={styles.input}
              placeholder="Re-Enter your password"
              onChange={(e) => handleRePassword(e)}
            />

            <button type="submit" style={styles.button}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
