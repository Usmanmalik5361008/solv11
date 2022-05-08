// import { productionListingTwo } from "constants/productionDataListings";
import {
  SigninPage,
  DashboardPage,
  ProjectsPage,
  ClaimsPage,
  AssetsPage,
  EquityPage,
  BenifitsPage,
  LiabilitiesPage,
  ProductUCPage,
  HealthPremiumsPage,
  ProductSantePage,
  FullRedemptionPage,
  HypothesesShockPage,
  AnnuitiesPage,
  PartialRedemptionPage,
  CorrelationMatrix1Page,
  CorrelationMatrix2Page,
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
          title: "Production Data",
          path: "production-data",
          children: [
            { path: "fond-propres", element: <AssetsPage /> },
            { path: "actifs", element: <EquityPage /> },
            {
              path: "primes-sante-pb-trad",
              element: <HealthPremiumsPage />,
              title: "Primes (santé) Pb Trad",
            },
            {
              path: "prestations-sante-pb-trad",
              element: <BenifitsPage />,
            },
            {
              path: "passif-uc-pb-trad",
              element: <LiabilitiesPage />,
            },
            {
              path: "produits-uc-pb-trad",
              element: <ProductUCPage />,
            },
            {
              path: "produits-sante-pb-trad",
              element: <ProductSantePage />,
            },
            {
              path: "rentes",
              element: <AnnuitiesPage />,
            },
            {
              path: "rachat-partiel",
              element: <PartialRedemptionPage />,
            },
            {
              path: "rachat-total",
              element: <FullRedemptionPage />,
            },
          ],
        },
        {
          title: "Compliance Settings",
          path: "compliance-settings",
          children: [
            {
              path: "hypothesis-de-choc",
              element: <HypothesesShockPage />,
              title: "Hypotheses (Shock)",
            },
            {
              path: "matrice-correlation-1",
              element: <CorrelationMatrix1Page />,
              title: "Matrice correlation 1",
            },
            {
              path: "matrice-correlation-2",
              element: <CorrelationMatrix2Page />,
              title: "Matrice correlation 2",
            },
          ],
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
