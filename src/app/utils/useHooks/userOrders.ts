"use client";
import { useState } from "react";
import API from "../api/api";

const useOrderHook = () => {
  const [ordersList, setOrdersList] = useState();

  const getAllOrderList = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const orders = await API.Orders.getAllOrderList(params);
      if (orders) {
        setOrdersList(orders as any);
        if (successCallback) successCallback(orders);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };

  const addOrderHandler = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const orders = await API.Orders.addOrder(params);
      if (orders) {
        if (successCallback) successCallback(orders);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };
  const updateOrderHandler = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const orders = await API.Orders.updateOrder(params);
      if (orders) {
        if (successCallback) successCallback(orders);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };
  const deleteOrderHandler = async (
    params: any,
    successCallback: any,
    failCallback: any
  ) => {
    try {
      const order = await API.Orders.deleteOrder(params);
      if (order) {
        if (successCallback) successCallback(order);
      }
    } catch (error) {
      if (failCallback) failCallback(error);
    }
  };

  return {
    ordersList,
  };
};

export default useOrderHook;
