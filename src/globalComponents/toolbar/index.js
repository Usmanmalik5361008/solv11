import {
  COPY_ICON,
  EDIT_PEN_ICON,
  DOWN_ICON,
  UPLOAD_ARROW_ICON,
  BLUE_RELOAD_ICON,
  DELETE_ICON,
  DOWNLOAD_ARROW_ICON,
  UP_ICON,
} from "assets";

import PillButton from "globalComponents/pillButton";
import React from "react";
import "./styles.scss";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="group-1">
        <PillButton
          rounded={false}
          type="highlighted"
          title={"DemoApp1"}
          prependIcon={BLUE_RELOAD_ICON}
        />
        <div className="common-spacing">
          <p>Switch to</p>
          <select className="dropdown-style-2">
            <option>Project 2</option>
          </select>
        </div>
      </div>
      <div className="group-2">
        <div className="common-spacing">
          <PillButton prependIcon={EDIT_PEN_ICON} />
          <PillButton prependIcon={COPY_ICON} />
        </div>
        <div className="common-spacing">
          <PillButton prependIcon={UP_ICON} />
          <PillButton prependIcon={DOWN_ICON} />
          <PillButton prependIcon={DOWNLOAD_ARROW_ICON} />
          <PillButton prependIcon={UPLOAD_ARROW_ICON} />
        </div>
        <div className="common-spacing">
          <PillButton prependIcon={DELETE_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
