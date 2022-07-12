import {
  analyticsIcon,
  complianceIcon,
  DashboardIcon,
  productionIcon,
  ProjectIcon,
  SimulationIcon,
  subMenuIcon,
} from "assets";
import {
  complianceSettings,
  productionListingTwo,
} from "./productionDataListings";

const menuItems = [
  {
    key: "1",
    name: "dashboard.title",
    icon: DashboardIcon,
    href: "/",
  },
  {
    key: "2",
    name: "projects.title",
    icon: ProjectIcon,
    href: "/",
  },
  {
    key: "3",
    name: "scrcalculation.title",
    icon: SimulationIcon,
    href: "/scr-calculation",
  },
  {
    key: "4",
    name: "projectdata.title",
    icon: ProjectIcon,
    href: "/projects",
  },
  {
    key: "5",
    name: "claims.title",
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
    key: "6",
    name: "production-data.title",
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
    key: "7",
    name: "compliance-settings.title",
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
    key: "8",
    name: "compliance-monitoring.title",
    icon: complianceIcon,
    href: "/compliance-monitoring",
    subMenu: [
      {
        key: "8-1",
        name: "compliance-monitoring.list-item-1",
        href: "/compliance-monitoring/scr",
        icon: subMenuIcon,
      },
      {
        key: "8-2",
        name: "compliance-monitoring.list-item-2",
        href: "/compliance-monitoring/profitability",
        icon: subMenuIcon,
      },
    ],
  },
];

export default menuItems;
