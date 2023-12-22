import React from "react";
import Header from "../components/commonUI/Header";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto ">
        <h1 className="pt-[7rem] text-6xl uppercase font-bold  text-center mb-6">About Us</h1>
        <div className="flex gap-6 items-center ">
          <motion.div className="w-[50%]"
          initial={{opacity:0}}
          animate={{opacity:1}}>
            <img
              src="https://img.freepik.com/premium-photo/portrait-asian-cheerful-successful-businessman-near-office-business-suit-confident-manager-salesman-broker-smiling_321831-5821.jpg"
              alt="Profile"
              className="w-[100%] rounded-lg shadow-md object-right object-cover"
            />
          </motion.div>
          <div className="w-[85%]">
            <p className="text-lg text-gray-800 mb-4">
              Welcome to <span className="font-bold">TechVerse</span>, your go-to destination for cutting-edge
              technology and innovative gadgets! I'm [Your Name], the founder
              and tech enthusiast behind this eCommerce venture.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              With a passion for staying ahead in the tech world, <span className="font-bold">TechVerse</span> aims
              to provide you with a curated selection of the latest gadgets,
              electronics, and tech accessories. Our team is dedicated to
              ensuring that you have a seamless and enjoyable shopping
              experience.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              At <span className="font-bold">TechVerse</span>, we believe in the transformative power of technology
              and its ability to enhance our lives. Whether you're a gadget
              geek, a professional in need of tech tools, or someone looking for
              the perfect tech gift, we've got you covered.
            </p>
            <p className="text-lg text-gray-800">
              Thank you for being a part of the <span className="font-bold">TechVerse</span> community. Explore our
              collection, stay updated with the latest tech trends, and embrace
              the future with us!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
