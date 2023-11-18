"use-client";
import API from "../api/api";

const login = async (params: any, successCallback: any, failCallback: any) => {
  try {
    const user = await API.Auth.login(params);
    if (!user.data.error) {
      if (successCallback) successCallback(user);
    } else {
      throw new Error(JSON.stringify(user.data));
    }
  } catch (error: any) {
    if (failCallback) failCallback(JSON.parse(error?.message));
  }
};

const Auth = {
  login,
};

export default Auth;
