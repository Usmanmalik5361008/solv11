import { productionIcon } from "assets";
import { complianceIcon } from "assets";
import { subMenuIcon } from "assets";
import { analyticsIcon } from "assets";
import { ReportingIcon } from "assets";
import { DashboardIcon, ProjectIcon, SimulationIcon } from "assets";
import {
  complianceSettings,
  productionListingTwo,
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
  {
    key: "4",
    name: "Reportings",
    icon: ReportingIcon,
    href: "/reportings",
  },
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
    href: "/compliance",
    subMenu: [
      {
        key: "7-1",
        name: "SCR",
        href: "/compliance/scr",
        icon: subMenuIcon,
      },
      {
        key: "7-2",
        name: "MCR",
        href: "/compliance/mcr",
        icon: subMenuIcon,
      },
      {
        key: "7-3",
        name: "SCR Brut",
        href: "/compliance/scr-brut",
        icon: subMenuIcon,
      },
    ],
  },
  {
    key: "8",
    name: "Screen 1",
    icon: <></>,
    href: "/screen1",
  },
  {
    key: "9",
    name: "Screen 2",
    icon: <></>,
    href: "/screen2",
  },
  {
    key: "10",
    name: "Screen 3",
    icon: <></>,
    href: "/screen3",
  },
];

export default menuItems;
