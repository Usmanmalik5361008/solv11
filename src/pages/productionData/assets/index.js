import { Tabs } from "antd";
import React from "react";
import { Auxilaries, Funds } from "./components";

const { TabPane } = Tabs;

const EquityPage = () => {
  return (
    <div className="tab-screen-1-page">
      <Tabs defaultActiveKey="1" className="custom-tabs-wrapper">
        <TabPane tab="Fonds Propress de Bass" key="1">
          <Funds />
        </TabPane>
        <TabPane tab="Fonds Proporess Auxiliaires" key="2">
          <Auxilaries />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default EquityPage;
