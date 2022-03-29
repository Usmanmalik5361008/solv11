import React from "react";
import { Layout, Menu } from "antd";
import { DashboardIcon } from "assets";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider trigger={null} collapsible className="sider" width={250}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={DashboardIcon}>
          Dashboard
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
