import { CheckCircleFilled } from "@ant-design/icons";
import { Alert, DatePicker, Tag } from "antd";
import { SCR_INPUT_ICON, SCR_REPORT_ICON, TICKET_WHTE_ICON } from "assets";
import { Button } from "globalComponents";
import { OptionCard } from "pages/dashboard/components";
import { useTranslation } from "react-i18next";
import { HierarchicalTree } from "./components";
import "./styles.scss";
import useNewDashboard from "./useNewDashboard";

const NewDashboard = () => {
  const { t } = useTranslation();
  const { handleRunScr, scrHierarchyFormatted } = useNewDashboard();

  return (
    <div className="card-view">
      <div className="dashboard-header">
        <div className={"left-side"}>
          <h3 className="font-Engschrift-Caps uppercase">SCR SOLVENCY 2</h3>
          <div className="common-spacing">
            <p>Switch to</p>
            <select className="dropdown-style-2">
              <option>Project 2</option>
              <option>Project 2</option>
            </select>
          </div>
        </div>
        <Button
          type="primary"
          title="RUN SCR"
          prependIcon={TICKET_WHTE_ICON}
          onClick={handleRunScr}
        />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-body-top">
          <div className="dashboard-body-top-left">
            <div className="div-gap">
              <p>On 10th June 2022</p>
              <Tag icon={<CheckCircleFilled />} color="success">
                Forecast
              </Tag>
            </div>
            <div className="div-gap" style={{ marginTop: 30 }}>
              <h5>Calculated on 1st May 2022</h5>
              <DatePicker />
            </div>
          </div>
          <div className="dashboard-body-top-right">
            <OptionCard
              title={t("dashboard.scr-report")}
              bgColor="#8BB8A2"
              icon={SCR_REPORT_ICON}
            />
            <OptionCard
              title={t("dashboard.scr-input")}
              bgColor="#4C4E8D"
              icon={SCR_INPUT_ICON}
            />
          </div>
        </div>

        <div className="mt-5" style={{ position: "relative" }}>
          {/* <Row> */}
          {/* <Col xs={24} sm={24} md={24} lg={24}> */}
          {scrHierarchyFormatted.length > 0 && (
            <div className="alerts-wrapper">
              <Alert
                message="Maintien des valeurs a la date initale de calibrage"
                type="success"
              />
              <Alert
                message="Recalcul des SCR marginaux a laide des proxies"
                type="error"
                style={{ border: "1px solid red" }}
              />
            </div>
          )}
          {scrHierarchyFormatted.length > 0 && (
            <HierarchicalTree scrHierarchyFormatted={scrHierarchyFormatted} />
          )}
          {/* </Col> */}

          {/* <Col xs={24} sm={24} md={24} lg={10}>
              <Graphs />
            </Col> */}
          {/* </Row> */}
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
