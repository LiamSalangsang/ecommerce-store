import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
      <section className="flex w-[100%] gap-[5rem] justify-center">
        <Link
          className="hover:text-purple-700 duration-100 ease-in text-xl font-[600] "
          to="/discover"
        >
          Categories
        </Link>
        <Link
          className="hover:text-purple-700 duration-100 ease-in text-xl font-[600]"
          to="/products"
        >
          Shop
        </Link>
        <Link
          className="hover:text-purple-700 duration-100 ease-in text-xl font-[600]"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-purple-700 duration-100 ease-in text-xl font-[600]"
          to="/userauth/login"
        >
          Sign In
        </Link>
      </section>
    </>
  );
};

export default NavBar;
