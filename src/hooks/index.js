// usePathPattern

import getRoutes from "navigation/routes";
import { matchPath, useLocation } from "react-router-dom";
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

export { usePathPattern };
