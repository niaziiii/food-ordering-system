import React, { useState } from "react";
import {
  TableHeaderList,
  UserLists,
  MenuLists,
  menuTableHeaders,
  userTableHeaders,
} from "./MembersLists";
import { TabContent } from "../listedOrders";
import { IOrder } from "@/app/utils/type";
import { Tabs } from "../Tabs/Tab";

const TableList = ({
  users,
  menus,
  editMenu,
  screen,
  deleteMenu,
  orders,
}: {
  users: any;
  menus: any;
  editMenu: any;
  screen: number;
  deleteMenu: any;
  orders: {
    pending: [];
    received: [];
    ready: [];
    pickup: [];
    delivered: [];
  };
}) => {
  const tabsData = [
    {
      label: "Pending",
      content: (
        <div className="text-black">
          {orders.pending.length > 0 ? (
            <TabContent orderData={orders.pending as IOrder[]} />
          ) : (
            <p className="text-center w-full text-white mt-6">
              No pending orders currently.
            </p>
          )}
        </div>
      ),
    },
    {
      label: "Received",
      content: (
        <div>
          {orders.received.length > 0 ? (
            <TabContent orderData={orders.received as IOrder[]} />
          ) : (
            <p className="text-center w-full text-white mt-6">
              No orders received by the restaurant yet.
            </p>
          )}
        </div>
      ),
    },
    {
      label: "Ready",
      content: (
        <div>
          {orders.ready.length > 0 ? (
            <TabContent orderData={orders.ready as IOrder[]} />
          ) : (
            <p className="text-center w-full text-white mt-6">
              Your food is not prepared yet by the restaurant.
            </p>
          )}
        </div>
      ),
    },
    {
      label: "Pickup",
      content: (
        <div>
          {orders.pickup.length > 0 ? (
            <TabContent orderData={orders.pickup as IOrder[]} />
          ) : (
            <p className="text-center w-full text-white mt-6">
              No orders available for pickup.
            </p>
          )}
        </div>
      ),
    },
    {
      label: "Delivered",
      content: (
        <div>
          {orders.delivered.length > 0 ? (
            <TabContent orderData={orders.delivered as IOrder[]} />
          ) : (
            <p className="text-center w-full text-white mt-6">
              No delivered orders yet.
            </p>
          )}
        </div>
      ),
    },
  ];

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
      <div className="w-[80%] bg-main">
        <Tabs
          labelClasses="!text-white hover:!text-black !rounded-none"
          tabClasses="!text-black"
          tabs={tabsData}
        />
      </div>
    );
  }
};

export default TableList;
