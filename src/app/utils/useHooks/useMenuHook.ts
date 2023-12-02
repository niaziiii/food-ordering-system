"use client";
import { useState } from "react";
import API from "../api/api";
import { useAppCustomContext } from "../context";

const useMenuHook = () => {
  const { dispatch, state } = useAppCustomContext();
  const [menuList, setMenu] = useState();

  const menuData = state.menu;

  const getAllMenuList = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const allMenu = await API.Menu.getAllMenuList(params);
      if (allMenu) {
        setMenu(allMenu as any);
        if (successCallback) successCallback(allMenu);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };
  const addMenuHandler = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const menu = await API.Menu.addMenu(params);
      if (menu) {
        if (successCallback) successCallback(menu);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };
  const updateMenuHandler = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const menu = await API.Menu.updateMenu(params);
      if (menu) {
        if (successCallback) successCallback(menu);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };
  const deleteMenuHandler = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const menu = await API.Menu.deleteMenu(params);
      if (menu) {
        if (successCallback) successCallback(menu);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };

  const updateMenuData = (data: any) => {
    dispatch({ type: "SET_MENU", payload: [...menuData, data] });
  };

  return {
    menuData,
    menuList,
    getAllMenuList,
    updateMenuData,
    addMenuHandler,
    deleteMenuHandler,
    updateMenuHandler,
  };
};

export default useMenuHook;
