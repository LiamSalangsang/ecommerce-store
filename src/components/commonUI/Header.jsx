import React from "react";
import Logo from "../Logo";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import { Toaster } from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <motion.div className=" absolute top-0 p-4 w-full flex justify-end items-center backdrop-blur-md ">
      <Logo />
      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <NavBar />
      <div className="flex items-center">
         <NavLink
          className="group/profile hover:text-purple-700 duration-100 ease-in "
          to={localStorage.getItem('token')?`/profile`:'/userauth/signin'}
        >
          <CgProfile
            className={`group-hover/profile:text-purple-700 ease-in text-[1.75rem] ${
              window.location.pathname === "/profile" ? "text-purple-700" : null
            }`}
          />
        </NavLink>
        <NavLink className={`group/cart p-4 pr-8`} to="/shopcart">
          <FaCartShopping
            className={`group-hover/cart:text-purple-700 duration-100 ease-in text-[1.75rem] ${
              window.location.pathname === "/shopcart"
                ? "text-purple-700"
                : null
            }`}
          />
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Header;
