import React from "react";

import { Tabs } from "antd";
import { ExternalFunds, Hypothesis } from "./components";

const { TabPane } = Tabs;

const TabScreen2 = () => {
  return (
    <div className="tab-screen-1-page">
      <Tabs defaultActiveKey="1" className="custom-tabs-wrapper">
        <TabPane tab="Contrat invested in extemal founds" key="1">
          <ExternalFunds />
        </TabPane>
        <TabPane tab="Contrat invested in dedicated founds" key="2">
          Contrat invested in dedicated founds
        </TabPane>
        <TabPane tab="Contrat a taux narantie FN" key="3">
          Contrat a taux narantie FN
        </TabPane>
        <TabPane tab="Hypothesis" key="4">
          <Hypothesis />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabScreen2;
