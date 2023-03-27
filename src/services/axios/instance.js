import axios from "axios";
import { LOCAL_STORAGE_VALUES } from "constants/common";
import { onLogout } from "services/redux/slices/user";
import store from "services/redux/store";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// to add token in request if present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_VALUES.TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios interceptor to handle 401 response and logout user
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // dispatch logout user from store
      store.dispatch(onLogout());
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
