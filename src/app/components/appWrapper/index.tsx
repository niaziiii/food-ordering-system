import React from "react";
import Header from "../header";
import Footer from "../footer";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-main-900 text-white">
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default AppWrapper;
