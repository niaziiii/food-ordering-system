import React from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

const IncrementDecrement = ({ mobile }: { mobile?: boolean }) => {
  return (
    <div>
      {mobile ? (
        <div className="flex flex-row items-center justify-between -mt-6 ml-40 gap-6 mr-0">
          <IoIosArrowBack />
          <b>5</b>
          <IoIosArrowForward />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between h-[6rem] mr-4">
          <IoIosArrowUp />
          <b>5</b>
          <IoIosArrowDown />
        </div>
      )}
    </div>
  );
};

export default IncrementDecrement;
