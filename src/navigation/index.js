import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getRoutes from "./routes";

const RouterConfig = () => {
  const user = useSelector((state) => state.user);
  return (
    <RouterProvider
      router={createBrowserRouter(getRoutes(user.isAuthenticated))}
    />
  );
};

export default RouterConfig;
