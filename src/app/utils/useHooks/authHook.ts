"use client";
import { useEffect, useState } from "react";
import Service from "../action";

export function useAuth() {
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  const login = (params: any, successCallback: any, failCallback: any) => {
    Service.Auth.login(
      params,
      (res: any) => {
        setUser(res?.data?.data ? res.data.data : {});
        if (successCallback) return successCallback(res?.data?.data);
      },
      (err: any) => {
        if (err) return failCallback(err);
      }
    );
  };
  useEffect(() => {
    Service.Auth.login(
      {},
      (res: any) => {
        console.log({ res });
      },
      (err: any) => {
        console.log({ err });
      }
    );
  }, []);
  return { user, login };
}
