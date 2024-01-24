import React from "react";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUp";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
