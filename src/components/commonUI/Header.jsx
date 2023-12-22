import React from "react";
import Logo from "../Logo"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import toast, { Toaster } from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <motion.div className=" absolute top-0 p-4 w-full flex justify-end items-center backdrop-blur-md ">
      <Logo />
      <Toaster
        toastOptions={{
          // Define default options
          duration: 1500,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <NavBar />
      <div className="flex items-center">
        <Link
          className="hover:text-purple-700 duration-100 ease-in "
          to="/profile"
        >
          <CgProfile className="text-[1.75rem]" />
        </Link>

        <Link className="group/cart p-4 pr-8" to="/shopcart">
          <FaCartShopping className="group-hover/cart:text-purple-700 duration-200 ease-in text-[1.75rem]" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
