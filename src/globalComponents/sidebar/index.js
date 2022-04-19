import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import menuItems from "constants/menuItems";
import SubMenu from "antd/lib/menu/SubMenu";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (href) => navigate(href);

  return (
    <Sider trigger={null} collapsible className="sider" width={290}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {menuItems.map(({ key, icon, href, name, subMenu }) =>
          subMenu ? (
            <SubMenu key={key} icon={icon} title={name}>
              {subMenu.map(({ key, icon, href, name }) => (
                <Menu.Item
                  key={key}
                  icon={icon}
                  onClick={() => handleNavigation(href)}
                >
                  {name}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item
              key={key}
              icon={icon}
              onClick={() => handleNavigation(href)}
            >
              {name}
            </Menu.Item>
          )
        )}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
