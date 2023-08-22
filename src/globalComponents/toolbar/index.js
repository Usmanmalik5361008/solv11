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

import { PillButton, Button } from "globalComponents";
import React from "react";
import "./styles.scss";
import { TICKET_WHTE_ICON } from "assets";
import Countdown from "antd/lib/statistic/Countdown";

const Toolbar = ({
  showToolbar,
  handleRunScr,
  runScrApiLoading,
  isRunScrBtnDisabled,
  timeLeft,
}) => {
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
          {handleRunScr && (
            <Button
              type="primary"
              title="RUN SCR"
              prependIcon={TICKET_WHTE_ICON}
              onClick={handleRunScr}
              loading={runScrApiLoading}
              disabled={isRunScrBtnDisabled}
            />
          )}
        </div>
        {timeLeft > 0 && (
          <Countdown value={Date.now() + timeLeft} format="mm:ss" />
        )}
      </div>
      {showToolbar && (
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
      )}
    </div>
  );
};

export default Toolbar;
