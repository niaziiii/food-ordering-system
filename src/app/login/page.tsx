import React from "react";
import AppWrapper from "../components/appWrapper";

const page = () => {
  return (
    <AppWrapper>
      <div className="bg-lightGrey/50 w-[98%] md:w-[90%] m-auto p-2 py-12 md:p-12">
        <div className="bg-white text-black md:w-[30rem] m-auto rounded">
          <h1 className="text-4xl font-medium text-center pt-6">Login</h1>
          <form action="#" className="flex flex-col gap-4 px-10 mt-4">
            <input
              type="email"
              required
              className="bg-lightGrey/50 p-4 border rounded"
              placeholder="Enter your email"
            />
            <input
              type="password"
              required
              className="bg-lightGrey/50 p-4 border rounded"
              placeholder="Enter your password"
            />
            <div className="mt-4 flex items-center justify-center mb-4">
              <button className="bg-gray px-20 text-white rounded font-bold py-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppWrapper>
  );
};

export default page;
