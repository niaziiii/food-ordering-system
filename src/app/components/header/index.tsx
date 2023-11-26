"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();

  const signOutHandler = () => {
    signOut({ callbackUrl: "/login", redirect: true });
  };
  return (
    <div className="bg-main w-full">
      <div className="flex items-center justify-between py-6 px-8">
        <h2 className="font-bold text-2xl md:text-3xl">
          <Link href={"/"}>Food App</Link>
        </h2>
        <ul className="items-center gap-10 hidden md:flex">
          <li className="font-semibold">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="font-semibold">
            <Link href="/cart">Cart</Link>
          </li>
          {status == "authenticated" ? (
            <div className="flex gap-4 items-center ">
              <b className="flex items-center gap-2 text-xl">
                <FaUser />
                {data.user.name}
              </b>
              <li className="font-semibold text-gray px-3 py-1 rounded  ">
                <button onClick={signOutHandler}>Logout</button>
              </li>
            </div>
          ) : (
            <li className="font-semibold bg-gray px-3 py-1 rounded  ">
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </ul>
        <li
          className=" md:hidden list-none text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <RxHamburgerMenu />
        </li>
        {open && (
          <MenuMobile logout={signOutHandler} close={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Header;

const MenuMobile = ({
  close,
  logout,
}: {
  close: () => void;
  logout: () => void;
}) => {
  const { data, status } = useSession();

  return (
    <div className="bg-main p-4 absolute w-full h-screen z-10 top-0 left-0 flex items-center justify-center flex-col">
      <div className="absolute top-4 left-4 cursor-pointer" onClick={close}>
        <IoMdClose />
      </div>
      <h2 className="font-bold text-3xl text-center -mt-20">
        <Link href={"/"}>Food App</Link>
      </h2>

      <ul className="items-center gap-2 flex flex-col mt-10 justify-center text-center">
        <li className="font-semibold">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="font-semibold">
          <Link href="/cart">Cart</Link>
        </li>
        {status == "authenticated" ? (
          <div className="flex gap-2 flex-col mt-4 items-center ">
            <b className="flex items-center gap-2 text-xl">
              <FaUser />
              {data.user.name}
            </b>
            <li className="font-semibold text-gray px-3 py-1 rounded  ">
              <button>Logout</button>
            </li>
          </div>
        ) : (
          <li className="font-semibold bg-gray px-3 py-1 rounded  ">
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
