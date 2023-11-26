"use client";
import React, { useState } from "react";
import AppWrapper from "../components/appWrapper";
import { signIn } from "next-auth/react";
import Header from "../components/header";
import Footer from "../components/footer";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      await signIn("credentials", {
        name: "Test",
        email: email,
        role: "admin",
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-main-900 text-white">
      <Header />
      <div className="w-full">
        <div className="bg-lightGrey/50 w-[98%] md:w-[90%] m-auto p-2 py-12 md:p-12">
          <div className="bg-white text-black md:w-[30rem] m-auto rounded">
            <h1 className="text-4xl font-medium text-center pt-6">Login</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 px-10 mt-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-lightGrey/50 p-4 border rounded"
                placeholder="Enter your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-lightGrey/50 p-4 border rounded"
                placeholder="Enter your password"
              />
              <div className="mt-4 flex items-center justify-center mb-4">
                <button
                  type="submit"
                  className="bg-gray px-20 text-white rounded font-bold py-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
