import React from "react";

import QuantityButton from "./QuantityButton";
import { cartContext } from "../pages/Cart";

const ShoppingCartItem = ({ item }) => {
  const { updatedCart } = React.useContext(cartContext);

  return (
    <>
      <main className="flex md:border-t-4 border-t-2  mt-14 justify-start p-4 md:w-[40rem] w-[90vw]">
        <div className=" gap-4 flex mt-4">
          <div className="flex items-center"><img className="md:w-[10rem] md:max-w-[10rem] border-2 border-black rounded-lg md:h-[auto] min-w-[7rem] max-w-[7rem] max-h-[7rem] object-cover" src={item.image} alt="" /></div>

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
            <div className="text-[1rem] font-bold">
              Subtotal: $
              {(
                (item.deals[0]
                  ? updatedCart.find((is) => is.id == item.id).deals[1]
                  : updatedCart.find((is) => is.id == item.id).price) *
                updatedCart.find((is) => is.id == item.id).quantity
              ).toFixed(2)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoppingCartItem;
