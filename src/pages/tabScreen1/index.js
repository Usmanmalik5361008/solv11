import React from "react";

import { Tabs } from "antd";
import { Hypothesis, CounterpartyRisk } from "./components";

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
          Content of SCR Sante_EN
        </TabPane>
        <TabPane tab="SCR UC/TG Pb Trad" key="4">
          Content of SCR UC/TG Pb Trad
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabScreen1;
