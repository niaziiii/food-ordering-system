import { useEffect, useState } from "react";
import { ICart } from "../type";
import { useAppCustomContext } from "../context";

const useCartHook = () => {
  const { dispatch, state } = useAppCustomContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const cartListData = state.cart;

  const addCartHandler = (cart: ICart) => {
    dispatch({ type: "SET_CART", payload: [...cartListData, cart] });
  };

  const deleteCartHandler = (i: number) => {
    const newCart = cartListData.filter((cart, idx) => i !== idx);
    dispatch({ type: "SET_CART", payload: [...newCart] });
  };

  useEffect(() => {
    let total = 0;
    cartListData?.map((cart) => {
      total = total + cart.price * cart.quantity;
    });
    setTotalAmount(total);
  }, [addCartHandler]);

  const incQuantity = (i: number) => {
    const cart = cartListData.find((cart, index) => i === index) || {
      quantity: 0,
      name: null,
    };
    cart.quantity = cart?.quantity + 1;

    if (cart.name) {
      dispatch({ type: "SET_CART", payload: new Set([...cartListData, cart]) });
    }
  };

  const decQuantity = (i: number) => {
    const cart = cartListData.find((cart, index) => i === index) || {
      quantity: 0,
      name: null,
    };
    cart.quantity = cart?.quantity - 1;

    if (cart.quantity == 0) {
      const carts = cartListData.filter((cart, index) => index !== i);
      dispatch({ type: "SET_CART", payload: new Set([...carts]) });
      return;
    }
    if (cart.name) {
      dispatch({ type: "SET_CART", payload: new Set([...cartListData, cart]) });
    }
  };

  return {
    totalAmount,
    cartListData,
    addCartHandler,
    deleteCartHandler,
    incQuantity,
    decQuantity,
  };
};

export default useCartHook;
