import { verifyTokenAxiosParams } from "api/axiosHookParams";
import { useAxios } from "hooks";
import { useEffect, useState } from "react";
import { onLogin } from "services/redux/slices/user";
import store from "services/redux/store";

const useApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const { result: verifyTokenCallResult, error } = useAxios(
    verifyTokenAxiosParams
  );

  let appLoading = isAuthenticated === null;

  useEffect(() => {
    if (verifyTokenCallResult) {
      const { success, data } = verifyTokenCallResult;
      if (success) {
        setIsAuthenticated(true);
        store.dispatch(onLogin(data?.user));
      } else {
        setIsAuthenticated(false);
      }
    }
  }, [verifyTokenCallResult]);

  useEffect(() => {
    if (error !== null) {
      setIsAuthenticated(false);
    }
  }, [error]);

  return { appLoading, error };
};

export default useApp;
