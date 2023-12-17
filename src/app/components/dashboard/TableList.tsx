import React, { useState } from "react";
import {
  TableHeaderList,
  UserLists,
  MenuLists,
  menuTableHeaders,
  userTableHeaders,
} from "./MembersLists";

const TableList = ({
  users,
  menus,
  editMenu,
  screen,
  deleteMenu,
}: {
  users: any;
  menus: any;
  editMenu: any;
  screen: number;
  deleteMenu: any;
}) => {
  if (screen == 0) {
    return (
      <div className="relative overflow-x-auto  flex-1 bg-main-500">
        <table className="w-full text-sm text-left  ">
          <thead className="bg-main text-lg text-white py-4 w-full">
            <TableHeaderList row={userTableHeaders} />
          </thead>
          <tbody className="">
            <UserLists users={users} />
          </tbody>
        </table>
      </div>
    );
  } else if (screen == 1) {
    return (
      <div className="relative overflow-x-auto  flex-1 bg-main-500">
        <table className="w-full text-sm text-left  ">
          <thead className="bg-main text-lg text-white py-4 w-full">
            <TableHeaderList row={menuTableHeaders} />
          </thead>
          <tbody>
            <MenuLists
              deleteMenu={deleteMenu}
              editMenu={editMenu}
              menus={menus}
            />
          </tbody>
        </table>
      </div>
    );
  } else if (screen == 2) {
    return (
      <div className="relative overflow-x-auto  flex-1 bg-main-500">
        <table className="w-full text-sm text-left  ">
          <thead className="bg-main text-lg text-white py-4 w-full">
            <TableHeaderList row={userTableHeaders} />
          </thead>
          <tbody className="">
            <UserLists users={users} />
          </tbody>
        </table>
      </div>
    );
  }
};

export default TableList;
