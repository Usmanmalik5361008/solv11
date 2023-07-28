import { Layout } from "antd";
import { PageHeader, Sidebar } from "globalComponents";
import React from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <>
      <Layout className="main-layout">
        <Layout>
          <Sidebar />
          <Layout className="header-content-container">
            <PageHeader />
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
