"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-main w-full">
      <div className="flex items-center justify-between py-6 px-8">
        <h2 className="font-bold text-2xl md:text-3xl">Food App</h2>
        <ul className="items-center gap-10 hidden md:flex">
          <li className="font-semibold">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="font-semibold">
            <Link href="/cart">Cart</Link>
          </li>
          <li className="font-semibold bg-gray px-3 py-1 rounded  ">
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
        <li
          className=" md:hidden list-none text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <RxHamburgerMenu />
        </li>
        {open && <MenuMobile close={() => setOpen(false)} />}
      </div>
    </div>
  );
};

export default Header;

const MenuMobile = ({ close }: { close: () => void }) => {
  return (
    <div className="bg-main p-4 absolute w-full h-screen z-10 top-0 left-0 flex items-center justify-center flex-col">
      <div className="absolute top-4 left-4 cursor-pointer" onClick={close}>
        <IoMdClose />
      </div>
      <h2 className="font-bold text-3xl text-center -mt-20">Food App</h2>

      <ul className="items-center gap-2 flex flex-col mt-10 justify-center text-center">
        <li className="font-semibold">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="font-semibold">
          <Link href="/cart">Cart</Link>
        </li>
        <li className="font-semibold bg-gray px-3 py-1 rounded  ">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
