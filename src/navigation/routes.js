// import { productionListingTwo } from "constants/productionDataListings";
import { t } from "i18next";
import { AuthLayout, MainLayout } from "layouts";
import {
  AnnuitiesPage,
  AssetsPage,
  DatabasePage,
  EquityPage,
  FullRedemptionPage,
  HealthBenefitPage,
  HealthPremiumsPage,
  HealthProductsPage,
  LiabilitiesPage,
  NewDashboardPage,
  PartialRedemptionPage,
  ProductUCPage,
  ProjectsPage,
  Register,
  SCRPage,
  SettingsPage,
  SigninPage,
  AppChoice,
  BalanceSheetPage,
  ExcelDataPage,
} from "pages";
import { Navigate, Outlet } from "react-router-dom";
import { excelDataLoader } from "./loaders";

const getRoutes = (isAuthenticated = false, isCurrentAppChosen) => {
  return [
    {
      element: !isAuthenticated ? (
        <AuthLayout />
      ) : (
        <Navigate to={isCurrentAppChosen ? "/" : "/choose"} replace />
      ),
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
      element: !isAuthenticated ? (
        <Navigate replace to={"/auth/signin"} />
      ) : isCurrentAppChosen ? (
        <MainLayout />
      ) : (
        <Navigate to={"/choose"} />
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
          title: t("sidebar.database"),
          element: <DatabasePage />,
          path: "database",
        },
        {
          title: t("sidebar.parametres"),
          element: <Outlet />,
          path: "settings",
          children: [
            {
              title: "",
              element: <SettingsPage />,
              index: true,
            },
            {
              title: "Choc Intérêt",
              path: "choc-interet",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("Parameters/Choc_Interet.xlsx"),
            },

            {
              title: "Courbe Taux Sans Risque",
              path: "courbe-taux-sans-risque",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("Parameters/CodeGestion.xlsx"),
            },
            {
              title: "Code Gestion",
              path: "code-gestion",
              element: <ExcelDataPage />,
              loader: () =>
                excelDataLoader("Parameters/Courbe_Taux_Sans_Risque.xlsx"),
            },
            {
              title: "Hypothèses Chocs",
              path: "hypotheses-chocs",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("Parameters/Hypotheses_Chocs.xlsx"),
            },
            {
              title: "Matrices Corrélation",
              path: "matrices-correlation",
              element: <ExcelDataPage />,
              loader: () =>
                excelDataLoader("Parameters/Matrices_Correlation.xlsx"),
            },
            {
              title: "Table Mortalite",
              path: "table-mortalite",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("Parameters/TableMortalite.xlsx"),
            },
          ],
        },
        {
          title: "Données Production",
          element: <Outlet />,
          path: "donneesProduction",
          children: [
            {
              title: "Actifs",
              path: "actifs",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("DonneesProduction/Actifs.xlsx"),
            },

            {
              title: "Contrats Epargne",
              path: "contrats-epargne",
              element: <ExcelDataPage />,
              loader: () =>
                excelDataLoader("DonneesProduction/ContratEpargne.xlsx"),
            },
            {
              title: "Contrats Vie Trad",
              path: "contrats-vie-trad",
              element: <ExcelDataPage />,
              loader: () =>
                excelDataLoader("DonneesProduction/ContratVieTrad.xlsx"),
            },
            {
              title: "Emetteurs",
              path: "emetteurs",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("DonneesProduction/Emetteurs.xlsx"),
            },
            {
              title: "Fonds",
              path: "fonds",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("DonneesProduction/Fonds.xlsx"),
            },
            {
              title: "Produits Epargne",
              path: "produits-epargne",
              element: <ExcelDataPage />,
              loader: () =>
                excelDataLoader("DonneesProduction/ProduitEpargne.xlsx"),
            },
            {
              title: "Produits Vie Trad",
              path: "produits-vie-trad",
              element: <ExcelDataPage />,
              loader: () =>
                excelDataLoader("DonneesProduction/ProduitVieTrad.xlsx"),
            },
            {
              title: "Rentes",
              path: "rentes",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("DonneesProduction/Rente.xlsx"),
            },
            {
              title: "Supports",
              path: "supports",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("DonneesProduction/Support.xlsx"),
            },
            {
              title: "Titres",
              path: "titres",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("DonneesProduction/Titres.xlsx"),
            },
          ],
        },
        {
          title: "Rachats",
          element: <Outlet />,
          path: "rachats",
          children: [
            {
              title: "Rachats Partiel",
              path: "rachats-partiel",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("Rachats/Rachat_Partiel.xlsx"),
            },
            {
              title: "Rachats Total",
              path: "rachats-total",
              element: <ExcelDataPage />,
              loader: () => excelDataLoader("Rachats/Rachat_Total.xlsx"),
            },
          ],
        },
        {
          title: "Compte Resultat",
          path: "compte_resultat",
          element: <ExcelDataPage />,
          loader: () => excelDataLoader("Compte_Resultat.xlsx"),
        },
        {
          title: "Fonds Propres",
          path: "fonds_propres",
          element: <ExcelDataPage />,
          loader: () => excelDataLoader("FondsPropres.xlsx"),
        },
        {
          title: "Risque Contrepartie",
          path: "risque_contrepartie",
          element: <ExcelDataPage />,
          loader: () => excelDataLoader("Risque_contrepartie.xlsx"),
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
    {
      path: "choose",

      element: !isAuthenticated ? (
        <Navigate replace to={"/auth/signin"} />
      ) : isCurrentAppChosen === null ? (
        <AppChoice />
      ) : (
        <Navigate replace to={"/"} />
      ),
    },
  ];
};

export default getRoutes;
