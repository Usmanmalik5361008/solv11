import { analyticsIcon, complianceIcon, DashboardIcon, productionIcon, ProjectIcon, SimulationIcon, subMenuIcon } from "assets";
import {
  complianceSettings,
  productionListingTwo
} from "./productionDataListings";

const menuItems = [
  {
    key: "1",
    name: "Dashboard",
    icon: DashboardIcon,
    href: "/",
  },
  {
    key: "2",
    name: "Projects",
    icon: ProjectIcon,
    href: "/projects",
  },
  {
    key: "3",
    name: "Claims",
    icon: SimulationIcon,
    href: "/claims",
  },
  // {
  //   key: "4",
  //   name: "Reportings",
  //   icon: ReportingIcon,
  //   href: "/reportings",
  // },
  {
    key: "5",
    name: "Production Data",
    icon: productionIcon,
    href: "/production-data",
    subMenu: [
      ...productionListingTwo.map(({ href, title }) => ({
        key: href,
        name: title,
        icon: subMenuIcon,
        href,
      })),
    ],
  },
  {
    key: "6",
    name: "Compliance Settings",
    icon: analyticsIcon,
    href: "/compliance-settings",
    subMenu: [
      ...complianceSettings.map(({ href, title }) => ({
        key: href,
        name: title,
        icon: subMenuIcon,
        href,
      })),
    ],
  },
  {
    key: "7",
    name: "Compliance Monitoring",
    icon: complianceIcon,
    href: "/compliance-monitoring",
    subMenu: [
      {
        key: "7-1",
        name: "SCR-Calcul reglementaire",
        href: "/compliance-monitoring/scr",
        icon: subMenuIcon,
      },
      {
        key: "7-2",
        name: "Profitabilite (Tests Solvabilite)",
        href: "/compliance-monitoring/profitability",
        icon: subMenuIcon,
      },
    ],
  },
];

export default menuItems;
