// usePathPattern

import getRoutes from "navigation/routes";
import { matchPath, useLocation } from "react-router-dom";

const routes = [getRoutes().flatMap(({ path }) => path)];

const usePathPattern = () => {
  const { pathname } = useLocation();

  return matchPath(pathname, routes)?.path;
};

export { usePathPattern };
