import React, { useState, useEffect } from 'react';


const SummaryCard = ({ total,cart,discount }) => {
  const totally = cart.reduce((sum,item)=>sum+(item.deals[0]?item.deals[1]*item.quantity:item.price*item.quantity),0)
  const discounty = cart.reduce((totaldiscount, item) => totaldiscount + (item.deals[0]&&(item.price*item.quantity) - (item.deals[0]&&item.deals[1]*item.quantity)), 0);


  return (
    <section className="relative mt-14 border w-[20rem] h-[25rem] p-4 rounded-md shadow-lg">
      <div className="text-gray-500 uppercase text-[0.7rem]">Enter Promo Code</div>
<div className="h-[50%]">
    
            <section  className=" w-full flex h-[2.5rem]"><input className=" border w-[60%]"></input>
            <div className="bg-black flex items-center justify-center text-white w-[50%] cursor-pointer group text-[0.8rem]"><span className="group-hover:scale-110 duration-200 ease-in-out">Submit</span></div></section>
</div>
      <div className="text-gray-500 text-lg border-t-2 border-black pt-2">Shipping Cost: TBD</div>
      <div className="text-gray-500 text-lg">Discount:  -${discounty}</div>
      <div className="text-gray-500 text-lg">Tax: TBD</div>
      <div className=" text-bold text-xl">Estimated Total  ${totally.toFixed(2)}</div>
      <div className="cursor-pointer bg-black/80 w-full h-[2.5rem] text-white hover:text-black hover:bg-gray-200 duration-50 ease-in flex justify-center items-center">Begin Checkout</div>
    </section>
  );
};

export default SummaryCard;
