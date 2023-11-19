import Image from "next/image";
import React, { useState } from "react";

const Cart = () => {
  const initialText =
    "Time to clean up the diet. So gone are the nights of wine-ing, and here arrived are the days of keto The most ordered dish in town.";

  const [showMore, setShowMore] = useState(false);
  const [displayText, setDisplayText] = useState(initialText.slice(0, 80));

  const handleShowMore = () => {
    if (showMore) {
      setDisplayText(initialText.slice(0, 80));
    } else {
      setDisplayText(initialText);
    }
    setShowMore(!showMore);
  };

  return (
    <div className="bg-main max-w-[18rem] overflow-hidden rounded">
      <div>
        <Image
          src={"/image-card.jpg"}
          alt="card-image"
          width={"300"}
          height={300}
        />
      </div>
      <div className="px-2">
        <h2 className="text-2xl mt-2 font-semibold">
          Pasta dish on a brown plate
        </h2>
        <div className="mt-1 text-md">
          {displayText}{" "}
          <p className="text-blue" onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2 mb-2">
          <button className="bg-gray px-4 py-1 rounded">Order now</button>
          <b className="text-green text-xl">10$</b>
        </div>
      </div>
    </div>
  );
};

export default Cart;
