import {
  analyticsIcon,
  complianceIcon,
  DashboardIcon,
  productionIcon,
  ProjectIcon,
  SimulationIcon,
  subMenuIcon,
} from 'assets'
import { epargneRetraitesMenu, santePrevoyanceMenu } from './subMenu'

const menuItems = [
  {
    key: '1',
    name: 'sidebar.dashboard',
    icon: DashboardIcon,
    href: '/',
  },
  {
    key: '2',
    name: 'sidebar.projects',
    icon: ProjectIcon,
    href: '/',
  },
  {
    key: '3',
    name: 'sidebar.scr.title',
    icon: SimulationIcon,
    href: '/scr',
    // subMenu: [
    //   ...scrMenu.map(({ href, title }) => ({
    //     key: href,
    //     name: title,
    //     icon: subMenuIcon,
    //     href: `/scr/${href}`,
    //   })),
    // ],
  },
  {
    key: '4',
    name: 'sidebar.scr-projection',
    icon: ProjectIcon,
    href: '/scr-projection',
  },
  {
    key: '5',
    name: 'sidebar.sante-prevoyance.title',
    icon: SimulationIcon,
    href: '/health-insurance',
    subMenu: [
      ...santePrevoyanceMenu.map(({ href, title }) => ({
        key: href,
        name: title,
        icon: subMenuIcon,
        href: `/health-insurance/${href}`,
      })),
    ],
  },
  // {
  //   key: "4",
  //   name: "Reportings",
  //   icon: ReportingIcon,
  //   href: "/reportings",
  // },
  {
    key: '6',
    name: 'sidebar.epargne-retraites.title',
    icon: productionIcon,
    href: '/retirement-savings',
    subMenu: [
      ...epargneRetraitesMenu.map(({ href, title }) => ({
        key: href,
        name: title,
        icon: subMenuIcon,
        href: `/retirement-savings/${href}`,
      })),
    ],
  },
  {
    key: '7',
    name: 'sidebar.bilan',
    icon: analyticsIcon,
    href: '/balance-sheet',
  },
  {
    key: '8',
    name: 'sidebar.fonds-propres',
    icon: complianceIcon,
    href: '/equity',
  },
  {
    key: '9',
    name: 'sidebar.parametres',
    icon: complianceIcon,
    href: '/settings',
  },
  {
    key: '10',
    name: 'sidebar.database',
    icon: complianceIcon,
    href: '/database',
  },
]

export default menuItems
