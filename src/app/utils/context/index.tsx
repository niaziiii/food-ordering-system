"use client";
import React, { createContext, useContext, useReducer } from "react";
import { ICart, IMenu } from "../type";
import { allData } from "../../../../public/static";

// Action types
export const actionTypes = {
  SET_MENU: "SET_MENU",
  SET_CART: "SET_CART",
} as const;

export type Action = {
  type: keyof typeof actionTypes;
  payload?: unknown;
};
interface AppState {
  cart: ICart[];
  menu: IMenu[];
}

const CustomReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return { ...state, cart: [...(action.payload as any)] };
    case actionTypes.SET_MENU:
      return { ...state, menu: [...(action.payload as any)] };

    default:
      return state;
  }
};

const initialGameState: AppState = {
  cart: [],
  menu: [],
};

export const CustomContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const AppCustomContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<AppState, Action>>(
    CustomReducer,
    initialGameState
  );

  return (
    <CustomContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomContext.Provider>
  );
};

export const useAppCustomContext = () => {
  const context = useContext(CustomContext);

  if (context === undefined) {
    throw new Error("useCustomContext must be used within a ContextProvider");
  }
  return context;
};
