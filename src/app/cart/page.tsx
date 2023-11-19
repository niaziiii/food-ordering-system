import React from "react";
import AppWrapper from "../components/appWrapper";
import ListedCart from "../components/listedCart";

const page = () => {
  return (
    <AppWrapper>
      <div className=" bg-lightGrey/50 mx-4 my-4 sm:mx-8 pb-8 rounded">
        <div className="text-black overflow-hidden flex flex-col relative w-full py-6">
          <h1 className="text-center text-3xl font-semibold w-full mt-3 mb-2">
            Your Cart
          </h1>
          <div className="my-4 flex items-center justify-center gap-4 flex-col md:mx-12">
            <ListedCart />
            <ListedCart />
            <ListedCart />
          </div>
          <div className="w-[80%] m-auto">
            <hr />
            <div className="flex items-center justify-between">
              <p className="mt-4 font-bold">Total</p>
              <b className="mt-4 font-bold">20$</b>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default page;
