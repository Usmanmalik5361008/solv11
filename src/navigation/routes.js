// import { productionListingTwo } from "constants/productionDataListings";
import { AuthLayout, MainLayout } from "layouts";
import {
  AnnuitiesPage,
  AssetsPage,
  BenifitsPage,
  ClaimsPage,
  CorrelationMatrix1Page,
  CorrelationMatrix2Page,
  DashboardPage,
  EquityPage,
  FullRedemptionPage,
  HealthPremiumsPage,
  HypothesesShockPage,
  LiabilitiesPage,
  PartialRedemptionPage,
  ProductSantePage,
  ProductUCPage,
  ProfitabilityPage,
  ProjectsPage,
  SCRPage,
  SigninPage,
} from "pages";

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
      title: "Dashboard",
      children: [
        {
          title: "Dashboard",
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
            {
              path: "fond-propres",
              element: <AssetsPage />,
              title: "Fond Propres",
            },
            { path: "actifs", element: <EquityPage />, title: "Actifs" },
            {
              path: "primes-sante-pb-trad",
              element: <HealthPremiumsPage />,
              title: "Primes (santé) Pb Trad",
            },
            {
              path: "prestations-sante-pb-trad",
              element: <BenifitsPage />,
              title: "Prestations (santé) Pb Trad",
            },
            {
              path: "passif-uc-pb-trad",
              element: <LiabilitiesPage />,
              title: "Passif UC Pb Trad",
            },
            {
              path: "produits-uc-pb-trad",
              element: <ProductUCPage />,
              title: "Produits UC Pb Trad",
            },
            {
              path: "produits-sante-pb-trad",
              element: <ProductSantePage />,
              title: "Produits Santé Pb Trad",
            },
            {
              path: "rentes",
              element: <AnnuitiesPage />,
              title: "Rentes",
            },
            {
              path: "rachat-partiel",
              element: <PartialRedemptionPage />,
              title: "Rachat Partiel",
            },
            {
              path: "rachat-total",
              element: <FullRedemptionPage />,
              title: "Rachat Total",
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
          title: "Compliance Monitoring",
          path: "compliance-monitoring",
          children: [
            {
              title: "SCR",
              element: <SCRPage />,
              path: "scr",
            },
            {
              title: "Profitability",
              element: <ProfitabilityPage />,
              path: "profitability",
            },
          ],
        },
      ],
    },
  ];
};

export default getRoutes;
