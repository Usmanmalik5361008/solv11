import { Row, Tabs } from "antd";

import { ConfirmationBox, Toolbar } from "globalComponents";
import {
  SanteBilanActifTable,
  SanteBilanPassifTable,
} from "globalComponents/tables";
// import './index.scss'
const { TabPane } = Tabs;

const BalanceSheetPage = () => {
  return (
    <div className="tab-screen-1-page toolbar-table-container">
      <div className="mb-5">
        <Toolbar />
      </div>
      <Row style={{ width: "100%", padding: "0 10px" }}>
        <Tabs
          defaultActiveKey="1"
          className="custom-tabs-wrapper"
          style={{ width: "100%" }}
        >
          <TabPane tab={"Actif"} key="1">
            <SanteBilanActifTable />
          </TabPane>
          <TabPane tab={"Pasif"} key="2">
            <SanteBilanPassifTable />
          </TabPane>
        </Tabs>
      </Row>
      <div className="mt-5">
        <ConfirmationBox />
      </div>
    </div>
  );
};
export default BalanceSheetPage;
