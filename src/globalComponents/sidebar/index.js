import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import menuItems from "constants/menuItems";
import { usePathPattern } from "hooks";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeRoute = usePathPattern();
  const handleNavigation = (href) => navigate(href);
  const [selectedKey, setSelectedKey] = useState();

  // recursively call function until menu item key is found from activeRoute
  const getSelectedKey = (menuItems) => {
    if (menuItems.length === 0) {
      return;
    }
    const menuItem = menuItems.find((item) => {
      if (item.subMenu) {
        return getSelectedKey(item.subMenu);
      }
      return item.href === activeRoute.path;
    });
    if (menuItem) {
      setSelectedKey(menuItem.key);
    }
  };

  useEffect(() => {
    getSelectedKey(menuItems);
  }, [location, getSelectedKey]);

  return (
    <Sider trigger={null} collapsible className="sider" width={290}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
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
