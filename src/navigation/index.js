import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";

const RouterConfig = () => {
  return useRoutes(getRoutes());
};

export default RouterConfig;
