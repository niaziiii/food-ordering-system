"use client";
import React, { useEffect, useState } from "react";
import AppWrapper from "../components/appWrapper";
import AdminMenu from "../components/dashboard/AdminMenu";
import TableList from "../components/dashboard/TableList";
import useUser from "../utils/useHooks/userHook";
import useMenuHook from "../utils/useHooks/useMenuHook";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Page = () => {
  const [screen, setScreen] = useState(0);
  const { getAllUserList } = useUser();
  const { getAllMenuList } = useMenuHook();

  const [allUsers, setAllUsers] = useState([]);
  const [allMenu, setAllMenu] = useState([]);

  const updatedScreen = (no: number) => setScreen(no);
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  } else {
    if (session.user.role == "user") redirect("/");
    if (session.user.role == "delivery") redirect("/delivery");
  }

  useEffect(() => {
    getAllUserList(
      {},
      (res: any) => {
        setAllUsers(res.data.data);
      },
      (err: any) => {
        console.log({ err });
      }
    );
    getAllMenuList(
      {},
      (res: any) => {
        setAllMenu(res.data.data);
      },
      (err: any) => {
        console.log({ err });
      }
    );
  }, []);

  return (
    <AppWrapper>
      <div className="min-h-[80vh] bg-white shadow-lg my-4 w-[70%] m-auto rounded flex">
        <AdminMenu updatedScreen={updatedScreen} screen={screen} />
        <TableList users={allUsers} menus={allMenu} screen={screen} />
      </div>
    </AppWrapper>
  );
};

export default Page;
