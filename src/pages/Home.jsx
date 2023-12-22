import React, { useState, useEffect, useContext } from "react";
import { productsContext } from "../components/context";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom";
import Header from "../components/commonUI/Header";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import Footer from "../components/commonUI/Footer"

const Home = () => {
  const { discover } = useParams();
  const { products, categories } = useContext(productsContext);
  const dealProducts = products.filter(
    (item) => "deals" in item && item.deals[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(dealProducts.length / itemsPerSlide);

  const visibleObjects = dealProducts.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, totalSlides]);

  return (
    <>
      <Header />
      {!discover ? (
        <div>
          <div>
            <div className="w-full h-screen flex ">
              <div className="w-[50%] flex gap-4 justify-center flex-col items-center">
                <h2 className="text-2xl">TechVerse</h2>
                <motion.h3 className="w-[70%] text-gray-800 text-lg text-center" initial={{x:-400}}
                animate ={{x:0}}
                transition={{duration:1}}>
                  Your go-to hub for the latest in tech. Explore curated
                  gadgets, expert reviews, and top brands. Experience seamless
                  shopping with fast delivery. Join our tech community and stay
                  ahead with innovation. TechVerse: Where tech meets lifestyle.
                </motion.h3>
                <motion.div initial={{y:100}}
                animate ={{y:0}}
                transition={{duration:1}}>
                  <Link className= 'mt-4 flex items-center gap-4 group/shoplink border-2 border-black p-2  font-bold hover:scale-110 hover:bg-purple-500 duration-200 ease-in' to ='/products'>SHOP NOW <FaArrowLeft className="group-hover/shoplink:-translate-x-[0.65rem] duration-200 ease-in"/></Link>
                </motion.div>
              </div>
                <div className="flex items-center">
                  <motion.img initial={{opacity:0}}
                  animate ={{opacity:1.1}}
                  transition={{duration:1}}
                  className="hover:scale-110 duration-200  md:block md:w-[30rem] md:h-[30rem] hidden ease-in-out mix-blend-multiply"
                    src="https://www.skullcandy.com.au/uploads/5/9/5/7/59571767/s709102391439706948_p93_i1_w450.jpeg"
                    alt=""
                  />
                </div>
            </div>

            <h2 className="text-2xl">Featured Deals</h2>
            <div className="flex justify-center w-full ">
              <div className="grid grid-cols-3 w-[50%] bg-black/20 p-4 rounded-2xl">
                {visibleObjects.map((item) => (
                  <motion.div className="p-4" initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  viewport={{ once: true }}
              
      
                 >
                    <ProductCard key={item.id} item={item} deal={item.deals} />
                  </motion.div>
                ))}
              </div>
            </div>

            <Link to="/userauth/signup">
              <h2 className="hover:text-white duration-200 ease-in-out w-[7rem]">
                Sign Up Now
              </h2>
            </Link>
            <p>Don't miss out on exclusive offers and updates. Sign up now!</p>
          </div>
        </div>
      ) : null}
      {discover ? (
        <div className="w-full  flex justify-center ">
          <div className="[90%]">
            <div className=" text-6xl pt-[7rem] text-center uppercase font-bold">Discover</div>

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
      ) : null}
      <Footer/>
    </>
  );
};

export default Home;
