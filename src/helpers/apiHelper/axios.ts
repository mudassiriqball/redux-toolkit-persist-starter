/* eslint-disable no-throw-literal */
import { getStore } from "../../store/hooks";
import axios, { AxiosResponse } from "axios";
import { ApiErrorResT } from "./types";

const axiosApi = axios.create({});

export const baseURL = `${process.env.REACT_APP_SERVER_URL}`;

axiosApi.defaults.timeout = 120000; // Milliseconds
axiosApi.interceptors.request.use(
  async (config: any) => {
    // Retrieve token from Redux
    const store: any = await getStore();
    const token = store?.getState()?.user?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    config.headers["Content-Type"] = "application/json";
    // config.credentials = "same-origin";
    config.baseURL = baseURL;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (error: ApiErrorResT) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error
    };
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
    };

    throw error
  }
);

export default axiosApi;
