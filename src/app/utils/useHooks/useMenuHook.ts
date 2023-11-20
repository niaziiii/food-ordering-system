"use client";
import { useAppCustomContext } from "../context";

const useMenuHook = () => {
  const { dispatch, state } = useAppCustomContext();
  const menuData = state.menu;

  const updateMenuData = (data: any) => {
    dispatch({ type: "SET_MENU", payload: [...menuData, data] });
  };

  return { menuData, updateMenuData };
};

export default useMenuHook;
