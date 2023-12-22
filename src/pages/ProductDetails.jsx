import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../components/context";
import Header from "../components/commonUI/Header";
import { Rating, alpha } from "@mui/material";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, cartProducts } = useContext(productsContext);

  const thisProduct = products.find((item) => item.id === parseInt(id));
  console.log("thisProduct", thisProduct);

  function addToCart() {
    const isItemAlreadyInCart = cartProducts.some(
      (item) => thisProduct.id == item.id
    );

    if (isItemAlreadyInCart) {
      toast.error("Already Added to Cart");
      const indexOfProduct = cartProducts.findIndex(
        (item) => item.id == thisProduct.id
      );

      cartProducts[indexOfProduct].quantity = 1;
    } else {
      toast.success("Added to Cart");
      cartProducts.push({ ...thisProduct, quantity: 1 });
    }
  }

  return (
    <>
      <Header />
      {thisProduct ? (
        <main className="h-screen flex gap-[12rem] justify-center items-center ">
          <div className=" min-w-[25rem] max-w-[30rem] ">
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
      ) : null}
    </>
  );
};

export default ProductDetails;
