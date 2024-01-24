import React from "react";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
<<<<<<< HEAD
=======
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUp";
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
<<<<<<< HEAD
          <Route path="*" element={<div>404 Not Found</div>} />
=======
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/signup" element={<SignUpPage />} />
>>>>>>> bd8d7c205ae7cb91f2be8faeeb8a9eead6a9e29f
        </Routes>
      </Router>
    </div>
  );
};

export default App;
