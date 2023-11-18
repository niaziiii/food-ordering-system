import apiService from "./api.service";

const postData = async (url: string, obj: string | Object, config = {}) => {
  return await apiService.post(url, obj, config);
};

const getData = async (url: string, obj: string | Object, config = {}) => {
  return await apiService.get(url, obj);
};

/* -- APIs -- */
export const Auth = {
  login: (params: string | Object) => postData("/test", params),
};
const API = {
  Auth,
};

export default API;
