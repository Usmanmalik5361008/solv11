import { Col, Row, Tabs } from "antd";
import { ConfirmationBox } from "globalComponents";
import { LineGraph } from "globalComponents";
import { Toolbar } from "globalComponents";
import React from "react";
import { useTranslation } from "react-i18next";
import { Jobs, WorkStatuses } from "./components";
import "./styles.scss";

const { TabPane } = Tabs;

const ScrCalculationPage = () => {
  const { t } = useTranslation();

  return (
    <div className="card-view scr-calculation-page">
      <div className="scr-calculation-header">
        <Toolbar />
      </div>
      <div className="card-body">
        <Row gutter={[30, 20]}>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Row gutter={[30, 30]}>
              <Col xs={24}>
                <WorkStatuses />
              </Col>
              <Col xs={24}>
                <Tabs defaultActiveKey="1" className="custom-tabs-wrapper">
                  <TabPane tab={t("forward-rate-graph")} key="1">
                    <LineGraph />
                  </TabPane>
                  <TabPane tab={t("flat-rate-graph")} key="2">
                    <LineGraph />
                  </TabPane>
                </Tabs>
                <ConfirmationBox btnText="Run SCR" />
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Jobs />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ScrCalculationPage;
