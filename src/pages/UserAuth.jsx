import React from "react";
import { useParams } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const UserAuth = () => {
const {useReg} = useParams()

  return (
    <>
   { useReg == "signin"?<Login/>:
    <SignUp/>}
    </>
  );
};

export default UserAuth;
