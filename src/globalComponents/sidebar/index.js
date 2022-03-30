import React from "react";
import { Layout, Menu } from "antd";
import { DashboardIcon } from "assets";
import { ProjectIcon } from "assets";
import { SimulationIcon } from "assets";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (href) => navigate(href);

  return (
    <Sider trigger={null} collapsible className="sider" width={250}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={DashboardIcon}
          onClick={() => handleNavigation("/")}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={ProjectIcon}
          onClick={() => handleNavigation("/projects")}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={SimulationIcon}
          onClick={() => handleNavigation("/claims")}
        >
          Claims
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
