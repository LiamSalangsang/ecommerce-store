import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import SignUp from "../components/SignUp";
import About from "../pages/About";
import Login from "../components/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:discover" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:categoryid" element={<Products />} />
      <Route path="/products/:categoryid/:id" element={<ProductDetails />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/userauth/signup" element={<SignUp />} />
      <Route path="/shopcart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/userauth/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
