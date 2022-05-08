import React from "react";

import { Tabs } from "antd";
import {
  Hypothesis,
  CounterpartyRisk,
  ScrSante,
  ScrUcTrad,
} from "./components";

const { TabPane } = Tabs;

const TabScreen1 = () => {
  return (
    <div className="tab-screen-1-page">
      <Tabs defaultActiveKey="1" className="custom-tabs-wrapper">
        <TabPane tab="Hypothesis" key="1">
          <Hypothesis />
        </TabPane>
        <TabPane tab="Counterparty Risk" key="2">
          <CounterpartyRisk />
        </TabPane>
        <TabPane tab="SCR Sante_EN" key="3">
          <ScrSante />
        </TabPane>
        <TabPane tab="SCR UC/TG Pb Trad" key="4">
          <ScrUcTrad />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabScreen1;
