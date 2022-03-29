import React from "react";
import { PillButton, TabsWithFilters } from "globalComponents";
import "./index.scss";
import {
  REFRESH_ICON,
  PLUS_ICON,
  DOWNLOAD_ICON,
  SETTINGS_LARGE_ICON,
  FILE_ICON,
} from "assets";

import { Alert } from "antd";
import { OptionCard, ProjectTable } from "./components";

const DashboardPage = () => {
  const infoText =
    "Lorem Ipsum is dummy text of the printing typesetting industry. the printing typesetting ind Lorem Ipsum has been the industry's standard dummy galley of type and scrambled.";

  const tabs = [
    { id: 0, title: "All Projects" },
    { id: 1, title: "Completed" },
    { id: 2, title: "Pending" },
  ];

  return (
    <div className="dashboard-page">
      <div className="card-view">
        <div className="d-flex justify-space-between">
          <h3>Projects</h3>
          <div className="actions">
            <div className="action-buttons">
              <PillButton title="Refresh" prependIcon={REFRESH_ICON} />
              <PillButton title="Download" prependIcon={DOWNLOAD_ICON} />
            </div>
          </div>
        </div>
        <div className="projects-body">
          <Alert message={infoText} type="info" showIcon />
          <div className="card-actions">
            <OptionCard
              title={"New Projects"}
              bgColor="#636C78"
              icon={PLUS_ICON}
            />
            <OptionCard
              title={"Reports"}
              bgColor="#4C4E8D"
              icon={SETTINGS_LARGE_ICON}
            />
            <OptionCard title={"Settings"} bgColor="#8BB8A2" icon={FILE_ICON} />
          </div>
        </div>
      </div>
      <div className="card-view p-0">
        <TabsWithFilters tabs={tabs}>
          <ProjectTable />
        </TabsWithFilters>
      </div>
    </div>
  );
};

export default DashboardPage;
