import { Avatar, Dropdown, Menu, Select } from "antd";
import {
  COMMENT_ICON,
  DOWN_ARROW_WHITE,
  INFORMATION_ICON,
  SETTINGS_ICON
} from "assets";
import { usePathPattern } from "hooks";
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import Breadcrums from "../breadcrums";

const { Option } = Select;

const PageHeader = () => {
  const activePath = usePathPattern();
  const { t } = useTranslation();

  const userMenu = (
    <Menu>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  const handleLanguageChange = (value) => {
    // change language with i18next
    i18next.changeLanguage(value);
  };


  return (
    <header className="page-header">
      <div className="upper-section">
        <h3 className="font-Engschrift-Caps uppercase">
          {activePath?.title || ""}
        </h3>
        <div className="actions">
          <Select
            defaultValue="en"
            className="language-select"
            bordered={false}
            onChange={handleLanguageChange}
          >
            <Option value="en">English</Option>
            <Option value="fr">French</Option>
          </Select>
          <img src={INFORMATION_ICON} alt="" />
          <img src={COMMENT_ICON} alt="" />
          <img src={SETTINGS_ICON} alt="" />
          <Dropdown overlay={userMenu}>
            <span>
              <Avatar className="mr-1">U</Avatar> Usman Malik{" "}
              <img src={DOWN_ARROW_WHITE} alt="" />
            </span>
          </Dropdown>
        </div>
      </div>
      <div className="bottom-section">
        <h2 className="font-Engschrift-Caps">SOLV11</h2>
        <p>{t('dashboard.analytics')}</p>
        <Breadcrums />
      </div>
    </header>
  );
};

export default PageHeader;
