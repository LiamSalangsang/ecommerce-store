import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordShow, setPasswordShow] = useState(false);

  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="flex">
      <section className="w-[100%] md:w-[65%] flex flex-col gap-4 justify-center h-[100vh] items-center ">
      <span className=" text-center text-4xl font-bold ">
        Login 
      </span>
          <form className="w-[17rem]" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                className="border border-purple-500 p-2 rounded-lg w-full"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="border border-purple-500 p-2 rounded-lg w-full peer "
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                *Required Valid Email
              </p>
            </div>
            <div className="relative">
              <label htmlFor="password">Password:</label>
              <input
                className="border border-purple-500 p-2 rounded-lg w-full"
                type={passwordShow ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                className="absolute top-[52%] right-2"
                onClick={handleShowPassword}
              >
                {" "}
                {passwordShow ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}
              </button>
            </div>

            <div className="w-full text-right p-2 ">
              {/* <button style = {gradientStyle} className = "hover:bg-red-50" type="submit">Sign Up</button> */}
              <Link className = " bg-purple-300 p-2 rounded-full hover:bg-purple-500 hover:text-white" to="/">Sign in</Link>
            </div>
            <div className="text-[0.75rem]">
              {" "}
              New to TechVerse?{" "}
              <Link
                to="/userauth/signup"
                className="text-blue-500 hover:underline"
              >
                Create Account
              </Link>
            </div>
          </form>
        </section>
        <img
          className="w-full h-[100vh] hidden md:block md:object-cover"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61AcjipaumL.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Login;
