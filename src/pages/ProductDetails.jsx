import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../components/context";
import Header from "../components/commonUI/Header";
import { Rating } from "@mui/material";
import toast from "react-hot-toast";
import BreadCrumbs from '../components/BreadCrumbs'

const ProductDetails = () => {
  const { id } = useParams();
  const { products, cartProducts } = useContext(productsContext);

  const thisProduct = products.find((item) => item.id === parseInt(id));

  function addToCart() {
    const isItemAlreadyInCart = cartProducts.some(
      (item) => thisProduct.id == item.id
    );

    if (isItemAlreadyInCart) {
      toast.error("Already Added to Cart");
    } else {
      cartProducts.push({ ...thisProduct, quantity: 1 });
      toast.success("Added to Cart");
    }
  }

  return (
    <>
      <Header />
      
      {thisProduct ? (
       <section>
       
         
         <main className="h-screen  md:flex-row flex flex-col md:gap-[12rem] justify-center items-center ">
           <div className=" md:min-w-[25rem] md:max-w-[30rem]  min-w-[15rem] max-w-[20rem]">
            <BreadCrumbs thisItem = {thisProduct}/>
             <img className="object-cover " src={thisProduct.image} alt="" />
           </div>
           <div>
             <div>{thisProduct.name}</div>
             {"deals" in thisProduct && thisProduct.deals[0] ? (
               <div>
                 ${thisProduct.deals} discounted from ${thisProduct.price}{" "}
               </div>
             ) : (
               <div>${thisProduct.price}</div>
             )}
             <div className="flex items-center">
               <div className="mr-2">{thisProduct.rating}/5.0</div>
               <Rating
                 name="read-only"
                 value={thisProduct.rating}
                 precision={0.2}
                 readOnly
               />
               <div className="ml-4 text-purple-500">
                 {thisProduct.reviews.length} Ratings
               </div>
             </div>
             <div>{thisProduct.description}</div>
             <button
               onClick={addToCart}
               className="mt-4 flex items-center gap-4 group/shoplink border-2 border-black p-2  font-bold hover:scale-110 hover:bg-purple-500 duration-200 ease-in"
             >
               {" "}
               Add to Cart{" "}
             </button>
           </div>
         </main>
       </section>
      ) : null}
    </>
  );
};

export default ProductDetails;
