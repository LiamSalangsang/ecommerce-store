import React, { useContext, createContext } from "react";
import Header from "../components/commonUI/Header";
import { productsContext } from "../components/context";
import ShoppingCartItem from "../components/ShoppingCartItem";
import SummaryCard from "../components/SummaryCard";

export const cartContext = createContext();

const Cart = () => {
  const { cartProducts } = useContext(productsContext);
  const [updatedCart, setUpdatedCart] = React.useState(cartProducts);

  function handleQuantityChange(singleItem, updatedQuantity) {
    const shallowCopy = updatedCart.slice();
    const updatedCopy = shallowCopy.map((it) =>
      it.id == singleItem.id ? { ...it, quantity: updatedQuantity } : it
    );
    setUpdatedCart(updatedCopy);
  }

  console.log(updatedCart)

  return (
    <>
      <Header />
      <div>
        <div className="pt-[7rem] text-center font-bold uppercase text-4xl md:text-6xl">
          My Shopping Cart
        </div>
        <div className="md:flex">
          <div className="min-h-[10rem] w-[60%]">
            <cartContext.Provider value={{ handleQuantityChange, updatedCart }}>
              {cartProducts ? (
                <div className="flex items-center flex-col ml-4 min-w-[60%] ">
                  {cartProducts.map((item) => (
                    <div className= ' md:flex md:justify-center  w-full  ' key={item.id}>
                      <ShoppingCartItem item={item} />
                    </div>
                  ))}
                </div>
              ) :null}
            </cartContext.Provider>
          </div>
          {updatedCart.length ==0 &&<div className="absolute md:top-[50%] md:left-[30%] top-[30%] left-[50%] translate-x-[-50%]"><span>No Items In Cart</span></div>}
          <div className="flex justify-center ">
            <SummaryCard cart={updatedCart} />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default Cart;
