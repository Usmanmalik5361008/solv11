import { Avatar, Dropdown, Menu } from "antd";
import {
  COMMENT_ICON,
  DOWN_ARROW_WHITE,
  INFORMATION_ICON,
  SETTINGS_ICON
} from "assets";
import { usePathPattern } from "hooks";
import React from "react";
import Breadcrums from "../breadcrums";

const PageHeader = () => {
  const activePath = usePathPattern();

  const userMenu = (
    <Menu>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  return (
    <header className="page-header">
      <div className="upper-section">
        <h3 className="font-Engschrift-Caps uppercase">{activePath?.title || ""}</h3>
        <div className="actions">
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
        <p>Solvency Analytics</p>
        <Breadcrums />
      </div>
    </header>
  );
};

export default PageHeader;
