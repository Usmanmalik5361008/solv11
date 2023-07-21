// import { productionListingTwo } from "constants/productionDataListings";
import { t } from "i18next";
import { AuthLayout, MainLayout } from "layouts";
import {
  AnnuitiesPage,
  AssetsPage, DatabasePage, EquityPage,
  FullRedemptionPage, HealthBenefitPage, HealthPremiumsPage, HealthProductsPage, LiabilitiesPage,
  NewDashboardPage,
  PartialRedemptionPage, ProductUCPage, ProjectsPage, Register, SCRPage, SettingsPage, SigninPage
} from "pages";
import BalanceSheetPage from "pages/balanceSheet";
import { Navigate } from "react-router-dom";

const getRoutes = (isAuthenticated = false) => {
  return [
    {
      element: isAuthenticated ? <Navigate replace to={"/"} /> : <AuthLayout />,
      path: "/auth",
      title: "Sigin In",
      children: [
        {
          element: <SigninPage />,
          path: "/auth/signin",
        },
        {
          element: <Register />,
          path: "/auth/register",
        },
      ],
    },
    {
      element: isAuthenticated ? (
        <MainLayout />
      ) : (
        <Navigate replace to={"/auth/signin"} />
      ),
      path: "/",
      title: "Dashboard",
      children: [
        {
          title: t("sidebar.dashboard"),
          element: <NewDashboardPage />,
          index: true,
        },
        {
          title: t("sidebar.scr.title"),
          element: <SCRPage />,
          path: "scr",
        },
        {
          title: t("sidebar.scr-projection"),
          element: <ProjectsPage />,
          path: "scr-projection",
        },
        {
          title: t("sidebar.sante-prevoyance.title"),
          path: "health-insurance",
          children: [
            {
              title: t("sidebar.sante-prevoyance.primes-sante"),
              element: <HealthPremiumsPage />,
              path: "health-premiums",
            },
            {
              title: t("sidebar.sante-prevoyance.prestation-sante"),
              element: <HealthBenefitPage />,
              path: "health-benefit",
            },
            {
              title: t("sidebar.sante-prevoyance.produit-sante"),
              element: <HealthProductsPage />,
              path: "health-products",
            },
          ],
        },
        {
          title: t("sidebar.epargne-retraites.title"),
          path: "retirement-savings",
          children: [
            // {
            //   path: 'fond-propres',
            //   title: t('production-data.list-item-1'),
            // },
            {
              path: "passif-uc",
              element: <LiabilitiesPage />,
              title: t("sidebar.epargne-retraites.passif-uc"),
            },
            {
              title: t("sidebar.epargne-retraites.produit-uc"),
              element: <ProductUCPage />,
              path: "produit-uc",
            },
            {
              title: t("sidebar.epargne-retraites.primes"),
              element: <HealthPremiumsPage />,
              path: "primes",
            },
            {
              path: "rachat",
              element: <PartialRedemptionPage />,
              title: t("sidebar.epargne-retraites.rachat"),
            },
            {
              title: t("sidebar.epargne-retraites.taux-rachat-partiel"),
              element: <PartialRedemptionPage />,
              path: "rachat-partial",
            },
            {
              title: t("sidebar.epargne-retraites.taux-rachat-total"),
              element: <FullRedemptionPage />,
              path: "rachat-total",
            },
            {
              title: t("sidebar.epargne-retraites.rentes"),
              element: <AnnuitiesPage />,
              path: "rentes",
            },
            {
              title: t("sidebar.epargne-retraites.actifs"),
              element: <AssetsPage />,
              path: "actifs",
            },

            // {
            //   path: 'prestations-sante-pb-trad',
            //   element: <BenifitsPage />,
            //   title: 'Prestations (santé) Pb Trad',
            // },

            // {
            //   path: 'produits-sante-pb-trad',
            //   element: <ProductSantePage />,
            //   title: 'Produits Santé Pb Trad',
            // },

            // {
            //   path: 'graphs',
            //   element: <Stats />,
            // },
          ],
        },
        {
          title: t("sidebar.bilan"),
          element: <BalanceSheetPage />,
          path: "balance-sheet",
        },
        {
          title: t("sidebar.fonds-propres"),
          element: <EquityPage />,
          path: "equity",
        },
        {
          title: t("sidebar.parametres"),
          element: <SettingsPage />,
          path: "settings",
        },
        {
          title: t("sidebar.database"),
          element: <DatabasePage />,
          path: "database",
        },
        // {
        //   title: t('projects.title'),
        //   element: <ProjectsPage />,
        //   path: 'projects',
        // },
        // {
        //   title: t('claims.title'),
        //   element: <ClaimsPage />,
        //   path: 'claims',
        // },
        // {
        //   title: t('compliance-monitoring.title'),
        //   path: 'compliance-monitoring',
        //   children: [
        //     {
        //       title: t('compliance-monitoring.list-item-1'),
        //       element: <SCRPage />,
        //       path: 'scr',
        //     },
        //     {
        //       title: t('compliance-monitoring.list-item-2'),
        //       element: <ProfitabilityPage />,
        //       path: 'profitability',
        //     },
        //   ],
        // },
      ],
    },
  ];
};

export default getRoutes;
