"use client";
import { useSession } from "next-auth/react";
import AppWrapper from "./components/appWrapper";
import HomePage from "./components/home";

export default function Home() {
  const { data, status, update } = useSession();

  return <AppWrapper>{<HomePage />}</AppWrapper>;
}
