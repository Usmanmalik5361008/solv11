import { Alert, Collapse } from "antd";

import { DOWNLOAD_ICON, REFRESH_ICON } from "assets";
import {
  complianceSettings,
  productionListingTwo,
} from "constants/productionDataListings";
import { Toolbar } from "globalComponents";
import { PillButton, TabsWithFilters } from "globalComponents";
import { useTranslation } from "react-i18next";
import { ProductionData } from "./components";
import "./index.scss";

const { Panel } = Collapse;

const ProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="projects-page">
      <div className="card-view">
        <div className="top-section">
          <Toolbar />
        </div>

        <div className="card-body">
          <Alert message={infoText} type="info" showIcon />
        </div>
      </div>
      <div className="card-view p-0">
        <TabsWithFilters tabs={tabs}>
          <Collapse expandIconPosition="right">
            {/* <Panel
              header={<h5 className="collapse-title">Production Data (02)</h5>}
            >
              <ProductionData productions={productionListingOne} />
            </Panel> */}
            <Panel
              header={
                <h5 className="collapse-title">
                  {t("production-data.title")} ({productionListingTwo.length})
                </h5>
              }
            >
              <ProductionData productions={productionListingTwo} />
            </Panel>
            <Panel
              header={
                <h5 className="collapse-title">
                  {t("compliance-settings.title")} ({complianceSettings.length})
                </h5>
              }
            >
              <ProductionData productions={complianceSettings} />
            </Panel>
          </Collapse>
        </TabsWithFilters>
      </div>
    </div>
  );
};

// dummy data

const infoText =
  "Lorem Ipsum is dummy text of the printing typesetting industry. the printing typesetting ind Lorem Ipsum has been the industry's standard dummy galley of type and scrambled.";

const tabs = [
  {
    title: "all",
    id: 0,
  },
  {
    title: "production-all",
    id: 1,
  },
  {
    title: "paramters",
    id: 2,
  },
  {
    title: "simulations",
    id: 3,
  },
  {
    title: "reporting",
    id: 4,
  },
];

// const productionListingOne = [
//   {
//     title: "Balance",
//     id: "9CI1KA2Y0Z-9CI0KA36C4",
//     bgColor: "#548AED",
//     imgSrc: PRODUCTION_CARD_IMAGE1,
//     variant: "colored",
//   },
//   {
//     title: "Claims",
//     id: "9CI1KA2Y0Z-9CI0KA36C6",
//     bgColor: "#F17141",
//     imgSrc: PRODUCTION_CARD_IMAGE2,
//     variant: "colored",
//   },
// ];

export default ProjectsPage;
