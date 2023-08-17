import { Avatar, Badge, Dropdown, Menu, Select } from "antd";
import {
  COMMENT_ICON,
  DOWN_ARROW_WHITE,
  INFORMATION_ICON,
  SETTINGS_ICON,
} from "assets";
import { usePathPattern } from "hooks";
import i18next from "i18next";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useTranslation } from "react-i18next";
import Breadcrums from "../breadcrums";
import { LOCAL_STORAGE_VALUES } from "constants/common";
import { onLogout } from "services/redux/slices/user";
import { Jobs } from "globalComponents";
import { BarChartOutlined } from "@ant-design/icons";

const { Option } = Select;

const PageHeader = () => {
  const activePath = usePathPattern();
  const { t } = useTranslation();
  const {
    user: { user },
    notification,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_VALUES.TOKEN);
    dispatch(onLogout());
  };

  const userMenu = (
    <Menu>
      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
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
          <Dropdown overlay={<Jobs />} overlayStyle={{ maxWidth: 400 }}>
            <Badge count={notification?.notifications?.length} offset={[1 , -5]}>
              <img src={COMMENT_ICON} alt="" />
            </Badge>
          </Dropdown>
          <img src={SETTINGS_ICON} alt="" />
          <Dropdown overlay={userMenu}>
            <span className="user-info-wrapper">
              <Avatar className="mr-1">{user?.name?.substring(0, 1)}</Avatar>{" "}
              {user?.name} <img src={DOWN_ARROW_WHITE} alt="" />
            </span>
          </Dropdown>
        </div>
      </div>
      <div className="bottom-section">
        <div>
          <h2 className="font-Engschrift-Caps">SOLV11</h2>
          <p>{t("dashboard.analytics")}</p>
          <Breadcrums />
        </div>
        <BarChartOutlined className="bar-icon" />
      </div>
    </header>
  );
};

export default PageHeader;
