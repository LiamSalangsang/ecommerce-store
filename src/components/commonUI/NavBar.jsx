import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  return (
    <>
      <nav className="flex w-[100%] md:gap-[5rem] gap-2 justify-center">
        <NavLink
  
          className= {({isActive})=>isActive?("hover:text-purple-700 duration-100 ease-in md:text-xl md:font-[600] text-purple-700"):("hover:text-purple-700 duration-100  ease-in md:text-xl md:font-[600]")}
          to="/discover"
        >
          Categories
        </NavLink>
        <NavLink
          className={({isActive})=>isActive?("hover:text-purple-700 duration-100 ease-in md:text-xl md:font-[600] text-purple-700"):("hover:text-purple-700 duration-100  ease-in md:text-xl md:font-[600]")}
          to="/products"
        >
          Shop
        </NavLink>
        <NavLink
          className={`hover:text-purple-700 duration-100 ease-in md:text-xl md:font-[600] ${
            window.location.pathname === "/about" ? "text-purple-700" : ""
          }`}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({isActive})=>isActive?("hover:text-purple-700 duration-100 ease-in md:text-xl md:font-[600] text-purple-700"):("hover:text-purple-700 duration-100  ease-in md:text-xl md:font-[600]")}
          to="/userauth/signin"
        >
          Sign In
        </NavLink>
      </nav>
    </>
  );
};

// const StyleSheet.create() ={

//   activeLink: {
//     backgroundColor:"cyan",
//     color:"black",
//     fontSize: "20px",
//     padding:'1rem',
//     textDecoration:"none"
//   },

//   defaultLink:{
//   padding:'1rem',
//   color:"black",
//   fontSize: "20px",
//   textDecoration:"none",

//   },

// }

export default NavBar;
