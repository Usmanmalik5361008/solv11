import { LOCAL_STORAGE_VALUES } from "constants/common";
import { AXIOS_METHODS } from "../constants/common";
import API_ENDPOINTS from "./endpoints";

const tokenFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_VALUES.TOKEN);

export const registerApiAxiosParams = {
  config: {
    method: AXIOS_METHODS.POST,
    url: API_ENDPOINTS.REGISTER,
  },
  shouldCallOnMount: false,
  showMessage: true,
};

export const loginApiAxiosParams = {
  config: {
    method: AXIOS_METHODS.POST,
    url: API_ENDPOINTS.LOGIN,
  },
  shouldCallOnMount: false,
  showMessage: true,
};

export const verifyTokenAxiosParams = {
  config: {
    method: AXIOS_METHODS.POST,
    url: API_ENDPOINTS.VERIFY_TOKEN,
    data: { token: tokenFromLocalStorage },
  },
  shouldCallOnMount: true,
  showMessage: false,
};

export const runScrAxiosParams = {
  config: {
    method: AXIOS_METHODS.POST,
    url: `${process.env.REACT_APP_SCR_API_URL}/${API_ENDPOINTS.RUN_SCR}`,
  },
  shouldCallOnMount: false,
  showMessage: false,
};
