import { Tooltip } from "antd";
import {
  DOWN_ICON,
  UP_ICON,
  EDIT_PEN_ICON,
  COPY_ICON,
  BLUE_RELOAD_ICON,
  DOWNLOAD_ARROW_ICON,
  UPLOAD_ARROW_ICON,
  DELETE_ICON,
} from "assets";
import { PillButton } from "globalComponents";
import { InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

const Setting = () => {

  const { t } = useTranslation()

  return (
    <div className="settings-wrapper">
      <div className="configuration">
        <div className="group-1">
          <PillButton
            rounded={false}
            type="highlighted"
            title={"DemoApp1"}
            prependIcon={BLUE_RELOAD_ICON}
          />
          <div className="common-spacing">
            <p>Style</p>
            <select className="dropdown-style-2">
              <option>Pills</option>
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
      <div className="configuration-bottom-bar">
        <div className="required-wrapper">
          <input type={"checkbox"} />
          <label>{t("required")}?</label>
        </div>
        <div className="title-wrapper">
          <BottomBarTitle
            title={t("parameter-name")}
            tooltipTitle={"This is a Parameter name tooltip"}
          />
          <BottomBarTitle
            title={t("display-name")}
            tooltipTitle={"This is a Display name tooltip"}
          />
          <BottomBarTitle
            title={t("parameter-type")}
            tooltipTitle={"This is a Parameter type tooltip"}
          />
          <BottomBarTitle
            title={t("global")}
            tooltipTitle={"This is a Global tooltip"}
          />
          <BottomBarTitle
            title={t("explanation")}
            tooltipTitle={"This is an Explanation tooltip"}
          />
        </div>
      </div>
      <textarea className="text-area" />
    </div>
  );
};

const BottomBarTitle = ({ title, tooltipTitle }) => (
  <div className="title-container">
    <div>{title}</div>
    <Tooltip placement="top" title={tooltipTitle}>
      <InfoCircleOutlined />
    </Tooltip>
  </div>
);

export default Setting;
