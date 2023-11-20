"use client";
import React from "react";
import useHomeHook from "../utils/useHooks/useHome";
import { useAuth } from "../utils/useHooks/authHook";

const index = () => {
  const { user } = useAuth();
  const { actual_count } = useHomeHook();
  // console.log({ actual_count, user });

  return <div>sofsdjfsd</div>;
};

export default index;
