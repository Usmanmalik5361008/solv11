// usePathPattern

import { message } from "antd";
import getRoutes from "navigation/routes";
import { useCallback, useEffect, useRef, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import axios from "services/axios/instance";
import { flattenRoutes } from "../utils";

const usePathPattern = () => {
  const allRoutes = getRoutes();

  const location = useLocation();

  const allFlattenRoutes = flattenRoutes(allRoutes);

  const matchedRoute = allFlattenRoutes.find((route) => {
    return matchPath({ path: route.path || "/" }, location.pathname) || false;
  });
  return matchedRoute;
};

const useAxios = (config) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const axiosProps = useRef(config);
  const isMounted = useRef(false);

  const callAxios = useCallback(
    async (additionalParams) => {
      let { config, showMessage } = { ...axiosProps.current };
      try {
        setLoading(true);

        if (additionalParams) {
          config = {
            ...config,
            ...additionalParams,
          };
        }

        const response = await axios(config);
        setResult(response?.data);

        showMessage &&
          message[response.data.success ? "success" : "error"]?.(
            response.data.message
          );
        return response.data;
      } catch (error) {
        setError(error);
        showMessage &&
          message.error(
            error?.response?.data?.message || "Something went wrong"
          );
      } finally {
        setLoading(false);
      }
    },
    [setLoading, axiosProps, setResult]
  );
  useEffect(() => {
    if (!isMounted.current && process.env.NODE_ENV === "development") {
      isMounted.current = true;
      return;
    }
    const { shouldCallOnMount } = axiosProps.current;

    if (shouldCallOnMount) {
      callAxios();
    }
  }, [axiosProps, callAxios]);

  return { result, loading, error, callAxios };
};

export { usePathPattern, useAxios };
