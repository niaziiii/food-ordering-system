import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";
import IncrementDecrement from "../IncDec";
const ListedCart = () => {
  return (
    <div className="bg-white flex flex-col w-[18rem] md:w-full md:flex-row items-center">
      <div>
        <Image
          src={"/image-card.jpg"}
          alt="card-image"
          width={"300"}
          height={200}
        />
      </div>
      <div className="px-1 md:px-4">
        <h2 className="text-2xl font-semibold">Pasta dish on a brown plate</h2>
        <p className="mt-1">
          Time to clean up the diet. So gone are the nights of wine-ing, and
          here arrived are the days of keto The most ordered dish in town.
        </p>
        <div className="flex items-center mt-2">
          <button className="text-red flex items-center gap-3 font-semibold ">
            Delete item <MdDelete />
          </button>
          <b className="ml-4 text-green">10$</b>
        </div>
      </div>
      <div className="hidden md:flex">
        <IncrementDecrement />
      </div>
      <div className="flex md:hidden">
        <IncrementDecrement mobile={true} />
      </div>
    </div>
  );
};

export default ListedCart;
