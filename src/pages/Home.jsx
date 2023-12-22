import React, { useState, useEffect, useContext } from "react";
import { productsContext } from "../components/context";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";
import Header from "../components/commonUI/Header";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import Footer from "../components/commonUI/Footer";
import Marquee from "react-fast-marquee";

const Home = () => {
  const { discover } = useParams();
  const { products, categories } = useContext(productsContext);
  const dealProducts = products.filter(
    (item) => "deals" in item && item.deals[0]
  );

  return (
    <>
      <Header />
      {!discover ? (
        <div>
          <div>
            <div className="w-full h-screen flex ">
              <div className="md:w-[50%] w-full flex gap-4 justify-center flex-col items-center">
                <h2 className="text-2xl">TechVerse</h2>
                <motion.h3
                  className="md:w-[70%] text-gray-800 text-md md:text-lg text-center w-full"
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  Your go-to hub for the latest in tech. Explore curated
                  gadgets, expert reviews, and top brands. Experience seamless
                  shopping with fast delivery. Join our tech community and stay
                  ahead with innovation. TechVerse: Where tech meets lifestyle.
                </motion.h3>
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Link
                    className="mt-4 flex items-center gap-4 group/shoplink border-2 border-black p-2  font-bold hover:scale-110 hover:bg-purple-500 duration-200 ease-in"
                    to="/products"
                  >
                    SHOP NOW{" "}
                    <FaArrowLeft className="group-hover/shoplink:-translate-x-[0.65rem] duration-200 ease-in" />
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1.1 }}
                  transition={{ duration: 1 }}
                  className="hover:scale-110 duration-200  md:block md:w-[30rem] md:h-[30rem] hidden ease-in-out mix-blend-multiply"
                  src="https://www.skullcandy.com.au/uploads/5/9/5/7/59571767/s709102391439706948_p93_i1_w450.jpeg"
                  alt=""
                />
              </div>
            </div>

            <h2 className="text-2xl">Featured Deals</h2>
            <div className="flex justify-center w-full">
    
                <div className="bg-black/20 rounded-md w-[50rem] ">
                  <Marquee speed = {65} pauseOnHover={true}>
                    {dealProducts.map((item) => (
                      <div
                      className="w-full"
                      >
                        <ProductCard key={item.id} item={item} deal={item.deals} />
                      </div>
                    ))}
                  </Marquee>
                </div>
            </div>

            <Link to="/userauth/signup">
           
            </Link>
            <p>Don't miss out on exclusive offers and updates. <span className="hover:text-purple-200 hover:cursor-pointer duration-100 ease-in-out w-[7rem] text-md">Sign up now!</span></p>
          </div>
          <Footer />
        </div>
        
      ) : null}
      {discover ? (
        <div>
          <div className="w-full  flex justify-center ">
            <div className="[90%]">
              <div className=" md:text-6xl text-4xl pt-[7rem] text-center uppercase font-bold">
                Discover
              </div>
              <div className="m-4 grid grid-cols-3">
                {categories.map((group) => {
                  return (
                    <div className="p-4" key={group.id}>
                      <Link to={`/products/${group.id}`}>
                        <CategoryCard details={group} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
            <div className = 'fixed bottom-0 w-full'>
              <Footer />
            </div>
        </div>
      ) : null}
     
    </>
  );
};

export default Home;
