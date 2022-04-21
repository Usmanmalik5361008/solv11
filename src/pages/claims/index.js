import React, { useState } from "react";
import { Badge } from "antd";
import {
  BLUE_RELOAD_ICON,
  EDITING_ICON,
  FILE_SAVE_ICON,
  HELP_ICON,
  SettingIcon,
  styleIcon,
  advancedSettingIcon,
} from "assets";
import { PillButton, ConfirmationBox } from "globalComponents";
import { Option, Setting } from "./components";
import "./index.scss";

const ClaimsPage = () => {
  const [activeOptionId, setActiveOptionId] = useState(0);

  const options = [
    {
      id: 0,
      title: "Settings",
      icon: SettingIcon,
      component: <Setting />,
    },
    {
      id: 1,
      title: "Advanced Setting",
      icon: advancedSettingIcon,
      component: <p>Under construnction</p>,
    },
    {
      id: 2,
      title: "Style",
      icon: styleIcon,
      component: <p>Under construnction</p>,
    },
  ];

  const onOptionChange = (id) => {
    setActiveOptionId(id);
  };

  return (
    <div className="claims-page">
      <div className="actions">
        <PillButton
          title="Demoapp1"
          type="highlighted"
          prependIcon={BLUE_RELOAD_ICON}
        />
        <PillButton prependIcon={FILE_SAVE_ICON} />
        <PillButton prependIcon={HELP_ICON} title="help" />
        <PillButton prependIcon={EDITING_ICON} title="Done Editing" />
      </div>
      <div className="card-view">
        <div className="header">
          <div>
            <h4>Claims</h4>
            <Badge style={{ backgroundColor: "#11B4ED" }} count={2} />
          </div>
        </div>
        <div className="claim-env-wrapper">
          <div className="claim-options">
            {options.map(({ title, icon, id }) => (
              <Option
                key={id}
                id={id}
                title={title}
                isActive={id === activeOptionId}
                icon={icon}
                onClick={onOptionChange}
              />
            ))}
          </div>
          {options.find(({ id }) => id === activeOptionId).component}
          <ConfirmationBox />
        </div>
      </div>
    </div>
  );
};

export default ClaimsPage;
