"use client";
import { useState } from "react";

const useHomeHook = () => {
  const [count, setCount] = useState(0);
  const actual_count = count + 10;

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  const sendRequest = () => {
    console.log("req");
  };

  return { actual_count, inc, dec, sendRequest };
};

export default useHomeHook;
