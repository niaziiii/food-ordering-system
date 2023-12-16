import React from "react";
import { useModal } from "../modal/useModal";
import AddMenuModalView from "@/app/components/modal/allReuseableModal/AddMenu";

const AdminMenu = ({
  updatedScreen,
  screen,
}: {
  updatedScreen: (num: number) => void;
  screen: number;
}) => {
  const { openModal } = useModal();
  let lists: any = ["Users", "Menu", "Orders"];

  return (
    <div className="w-[12rem] border-r bg-main">
      <p className="text-center my-4 text-2xl font-bold border-b pb-4">
        Menu List
      </p>
      <ul className="h-full flex pl-6 gap-5 text-xl flex-col">
        {lists.map((list: any, i: any) => {
          return (
            <li
              className={`cursor-pointer inline-block ${
                i == screen ? "text-green" : ""
              }`}
              key={i}
              onClick={() => updatedScreen(i)}
            >
              {list}
            </li>
          );
        })}
        <button
          className={`cursor-pointer inline-block text-sm text-green text-start mt-12`}
          onClick={() => {
            console.log("op3n");

            openModal({
              view: <AddMenuModalView />,
              customSize: "720px",
            });
          }}
        >
          Add Menu
        </button>
      </ul>
    </div>
  );
};

export default AdminMenu;
