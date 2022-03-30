import { Layout } from "antd";
import { Footer, PageHeader, Sidebar } from "globalComponents";
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
        <Footer />
      </Layout>
    </>
  );
};

export default MainLayout;
