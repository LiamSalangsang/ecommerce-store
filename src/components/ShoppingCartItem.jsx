import React from "react";

import QuantityButton from "./QuantityButton";
import { cartContext } from "../pages/Cart";

const ShoppingCartItem = ({ item }) => {
  const { updatedCart } = React.useContext(cartContext);

  return (
    <>
      <main className="flex border-t-4 mt-14 justify-start p-4 w-[40rem]">
        <div className=" flex mt-4">
          <img className="w-[10rem]" src={item.image} alt="" />

          <div>
            <div className="font-bold text-2xl">{item.name}</div>
            <div className="font-semibold text-gray-500 text-sm">
              Price: $
              {item.deals[0] ? (
                <div>
                  <div className="text-purple-400 font-bold">
                    ${item.deals[1]} Discounted Price!
                  </div>{" "}
                  <span>{(item.price - item.deals[1]).toFixed(2)} off!</span>
                </div>
              ) : (
                item.price
              )}
            </div>
            <div className="font-semibold text-gray-500 text-sm">
              {item.description}
            </div>
            <QuantityButton thisItem={item} cart={updatedCart} />
            Subtotal: $
            {(
              (item.deals[0]
                ? updatedCart.find((is) => is.id == item.id).deals[1]
                : updatedCart.find((is) => is.id == item.id).price) *
              updatedCart.find((is) => is.id == item.id).quantity
            ).toFixed(2)}
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoppingCartItem;
