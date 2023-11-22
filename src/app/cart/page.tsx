"use client";
import React from "react";
import AppWrapper from "../components/appWrapper";
import ListedCart from "../components/listedCart";
import useCartHook from "../utils/useHooks/useCartHook";

const Page = () => {
  const { cartListData, totalAmount } = useCartHook();

  return (
    <AppWrapper>
      <div className=" bg-lightGrey/50 mx-4 my-4 sm:mx-8 pb-8 rounded">
        <div className="text-black overflow-hidden flex flex-col relative w-full py-6">
          <h1 className="text-center text-3xl font-semibold w-full mt-3 mb-2">
            Your Cart
          </h1>
          <div className="my-4 flex items-center justify-center gap-4 flex-col md:mx-12">
            {!cartListData.length ? (
              <p>Please add some items to cart</p>
            ) : (
              cartListData?.map((cart, i) => {
                return <ListedCart data={cart} index={i} key={i} />;
              })
            )}
          </div>
          <div className="w-[80%] m-auto">
            <hr />
            <div className="flex items-center justify-between">
              <p className="mt-4 font-bold">Total</p>
              <b className="mt-4 font-bold">{totalAmount}$</b>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Page;
