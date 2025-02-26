import { apiConfig } from "@/apis";
import { API_URL, localKey, pathNames } from "@/constants";
import { getStringLocalData, removeLocalItem } from "@/utils";
import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (conf) => {
    const token = getStringLocalData(localKey.TOKEN);
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
    if (error?.config?.url === apiConfig.login.endpoint)
      return error.response?.data;
    if (error.response?.status === 401 || error.response?.status === 403) {
      removeLocalItem(localKey.TOKEN);
      window.location.replace(pathNames.LOGIN);
      return;
    }
    return error.response?.data;
  }
);
