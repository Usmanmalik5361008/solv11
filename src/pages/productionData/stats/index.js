import { Tabs } from "antd";
import { LineGraph } from "globalComponents";
import React from "react";

const { TabPane } = Tabs;

const Stats = () => {
  return (
    <Tabs defaultActiveKey="1" className="custom-tabs-wrapper">
      <TabPane tab={"Graph"} key="1">
        <LineGraph />
      </TabPane>
    </Tabs>
  );
};

export default Stats;
