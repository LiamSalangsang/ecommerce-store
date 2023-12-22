import React, { useContext, createContext } from "react";
import Header from "../components/commonUI/Header";
import { productsContext } from "../components/context";
import ShoppingCartItem from "../components/ShoppingCartItem";
import SummaryCard from "../components/SummaryCard";
import Footer from '../components/commonUI/Footer'

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

  return (
    <>
      <Header />
      <div>
        <div className="pt-[7rem] text-center font-bold uppercase text-6xl">
          {" "}
          My Shopping Cart
        </div>
        <div className="flex">
          <cartContext.Provider value={{ handleQuantityChange, updatedCart }}>
            <div className="flex items-center flex-col min-w-[60%]">
              {cartProducts.map((item) => {
                return (
                  <div>
                    <ShoppingCartItem item={item} />
                  </div>
                );
              })}
            </div>
          </cartContext.Provider>
          <div>
            <SummaryCard cart={updatedCart} />
          </div>
        </div>
      </div>
      <div>
     </div>
    </>
  );
};
export default Cart;
