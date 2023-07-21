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
  const controllerRef = useRef(new AbortController());

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
        config = {
          ...config,
          signal: controllerRef.current.signal,
        };

        const response = await axios(config);
        setResult(response?.data);

        if (showMessage) {
          if (response.status === 200) {
            message.success(
              response?.data?.message ||
                response?.data?.msg ||
                "Operation done successfully"
            );
          } else {
            message.error("Something went wrong");
          }
        }

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
    [setLoading, axiosProps, setResult, controllerRef]
  );

  const cancelRequest = useCallback(() => {
    controllerRef.current.abort();
    controllerRef.current = new AbortController();
  }, []);

  useEffect(() => {
    if (!isMounted.current && process.env.NODE_ENV === "development") {
      isMounted.current = true;
      return;
    }
    const { shouldCallOnMount } = axiosProps.current;

    if (shouldCallOnMount) {
      callAxios();
    }

    return () => cancelRequest();
  }, [axiosProps, callAxios, cancelRequest]);

  return { result, loading, error, callAxios, cancelRequest };
};

export { usePathPattern, useAxios };
