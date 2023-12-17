"use client";
import React, { useEffect, useState } from "react";
import AppWrapper from "../components/appWrapper";
import AdminMenu from "../components/dashboard/AdminMenu";
import TableList from "../components/dashboard/TableList";
import useUser from "../utils/useHooks/userHook";
import useMenuHook from "../utils/useHooks/useMenuHook";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import AddMenuModalView from "../components/modal/allReuseableModal/AddMenu";
import { useModal } from "../components/modal/useModal";
import toast from "react-hot-toast";

const Page = () => {
  const { getAllMenuList, deleteMenuHandler } = useMenuHook();
  const { openModal } = useModal();
  const { data: session } = useSession();

  const [screen, setScreen] = useState(0);
  const { getAllUserList } = useUser();
  const [pageState, setPageState] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allMenu, setAllMenu] = useState([]);
  const updateState = () => setPageState(!pageState);
  const updatedScreen = (no: number) => setScreen(no);

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
        console.log({ res });

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
  }, [pageState]);

  const deleteMenu = (row: any) => {
    deleteMenuHandler(
      { _id: row._id },
      (res: any) => {
        toast.success(res?.data?.message);
        updateState();
      },
      (err: any) => {
        console.log({ err });
      }
    );
  };
  const editMenu = (row: any) => {
    openModal({
      view: <AddMenuModalView row={row} updateTableState={updateState} />,
      customSize: "720px",
    });
  };
  return (
    <AppWrapper>
      <div className="min-h-[80vh] bg-white shadow-lg my-4 w-[70%] m-auto rounded flex">
        <AdminMenu
          updatedScreen={updatedScreen}
          screen={screen}
          updateState={updateState}
        />
        <TableList
          deleteMenu={deleteMenu}
          editMenu={editMenu}
          users={allUsers}
          menus={allMenu}
          screen={screen}
        />
      </div>
    </AppWrapper>
  );
};

export default Page;
