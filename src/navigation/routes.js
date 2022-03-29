import { SigninPage, DashboardPage, ProjectsPage, ClaimsPage } from "pages";
import { AuthLayout } from "layouts";
import MainLayout from "layouts/mainLayout";

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
      ],
    },
  ];
};

export default getRoutes;
