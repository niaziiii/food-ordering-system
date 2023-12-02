import React from "react";

const AdminMenu = ({
  updatedScreen,
  screen,
}: {
  updatedScreen: (num: number) => void;
  screen: number;
}) => {
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
      </ul>
    </div>
  );
};

export default AdminMenu;
