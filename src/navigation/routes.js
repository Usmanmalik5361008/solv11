// import { productionListingTwo } from "constants/productionDataListings";
import { t } from "i18next";
import { AuthLayout, MainLayout } from "layouts";
import { Stats } from "pages";
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
  NewDashboardPage,
  ScrCalculationPage,
} from "pages";
import { Navigate } from "react-router-dom";

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
          title: t("dashboard.title"),
          element: <NewDashboardPage />,
          index: true,
        },
        {
          title: t("scrcalculation.title"),
          element: <ScrCalculationPage />,
          path: "scr-calculation",
        },
        {
          title: t("projects.title"),
          element: <ProjectsPage />,
          path: "projects",
        },
        {
          title: t("production-data.title"),
          path: "production-data",
          children: [
            {
              path: "fond-propres",
              element: <AssetsPage />,
              title: t("production-data.list-item-1"),
            },
            {
              path: "actifs",
              element: <EquityPage />,
              title: t("production-data.list-item-2"),
            },
            {
              path: "primes-sante-pb-trad",
              element: <HealthPremiumsPage />,
              title: t("production-data.list-item-3"),
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
            {
              path: "graphs",
              element: <Stats />,
            },
          ],
        },
        {
          title: t("compliance-settings.title"),
          path: "compliance-settings",
          children: [
            {
              path: "hypothesis-de-choc",
              element: <HypothesesShockPage />,
              title: t("compliance-settings.list-item-1"),
            },
            {
              path: "matrice-correlation-1",
              element: <CorrelationMatrix1Page />,
              title: t("compliance-settings.list-item-2"),
            },
            {
              path: "matrice-correlation-2",
              element: <CorrelationMatrix2Page />,
              title: t("compliance-settings.list-item-3"),
            },
          ],
        },
        {
          title: t("claims.title"),
          element: <ClaimsPage />,
          path: "claims",
        },
        {
          title: t("compliance-monitoring.title"),
          path: "compliance-monitoring",
          children: [
            {
              title: t("compliance-monitoring.list-item-1"),
              element: <SCRPage />,
              path: "scr",
            },
            {
              title: t("compliance-monitoring.list-item-2"),
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
