import {
  SigninPage,
  DashboardPage,
  ProjectsPage,
  ClaimsPage,
  TabScreen1,
  TabScreen2,
  TabScreen3,
} from "pages";
import { AuthLayout, MainLayout } from "layouts";

const getRoutes = () => {
  return [
    {
      element: <AuthLayout />,
      path: "/auth",
      title: "Sigin In",
      children: [
        {
          element: <SigninPage />,
          path: "/auth/signin",
        },
      ],
    },
    {
      element: <MainLayout />,
      path: "/",
      title: "home",
      children: [
        {
          title: "Home",
          element: <DashboardPage />,
          index: true,
        },
        {
          title: "Projects",
          element: <ProjectsPage />,
          path: "projects",
        },
        {
          title: "Claims",
          element: <ClaimsPage />,
          path: "claims",
        },
        {
          title: "Tab Screen 1",
          element: <TabScreen1 />,
          path: "screen1",
        },
        {
          title: "Tab Screen 2",
          element: <TabScreen2 />,
          path: "screen2",
        },
        {
          title: "Tab Screen 3",
          element: <TabScreen3 />,
          path: "screen3",
        },
      ],
    },
  ];
};

export default getRoutes;
