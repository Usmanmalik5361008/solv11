import React from "react";

import { Tabs } from "antd";
import {
  Hypothesis,
  CounterpartyRisk,
  ScrSante,
  ScrUcTrad,
} from "./components";
import { useTranslation } from "react-i18next";

const { TabPane } = Tabs;

const SCRPage = () => {
  const {t} = useTranslation()
  return (
    <div className="tab-screen-1-page">
      <Tabs defaultActiveKey="1" className="custom-tabs-wrapper">
        <TabPane tab={t("compliance-monitoring.hypothesis")} key="1">
          <Hypothesis />
        </TabPane>
        <TabPane tab={t("compliance-monitoring.counterparty-risk")} key="2">
          <CounterpartyRisk />
        </TabPane>
        <TabPane tab={t("compliance-monitoring.scr-sante_en")} key="3">
          <ScrSante />
        </TabPane>
        <TabPane tab={"SCR UC/TG Pb Trad"} key="4">
          <ScrUcTrad />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SCRPage;
