
import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import {
  Contract,
  DedicatedFunds,
  ExternalFunds,
  Hypothesis,
} from "./components";

const { TabPane } = Tabs;

const ProfitabilityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="tab-screen-1-page">
      <Tabs defaultActiveKey="1" className="custom-tabs-wrapper mt-5">
        <TabPane tab={t("compliance-monitoring.contract-external")} key="1">
          <ExternalFunds />
        </TabPane>
        <TabPane tab={t("compliance-monitoring.contract-dedicated")} key="2">
          <DedicatedFunds />
        </TabPane>
        <TabPane tab={t("compliance-monitoring.fn-contract")} key="3">
          <Contract />
        </TabPane>
        <TabPane tab={t("compliance-monitoring.hypothesis")} key="4">
          <Hypothesis />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProfitabilityPage;
