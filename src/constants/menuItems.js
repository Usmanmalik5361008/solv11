import { productionIcon } from "assets";
import { complianceIcon } from "assets";
import { subMenuIcon } from "assets";
import { analyticsIcon } from "assets";
import { ReportingIcon } from "assets";
import { DashboardIcon, ProjectIcon, SimulationIcon } from "assets";

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
    subMenu: [],
  },
  {
    key: "6",
    name: "Analytics Parameters",
    icon: analyticsIcon,
    href: "/analytics",
    subMenu: [],
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
];

export default menuItems;
