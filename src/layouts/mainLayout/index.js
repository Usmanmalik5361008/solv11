import { Layout } from "antd";
import { PageHeader, Sidebar } from "globalComponents";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Content } = Layout;

const MainLayout = () => {
  const notification = useSelector((state) => state.notification);
  const headerContentContainerRef = useRef(null); // Step 1: Create a reference
  const location = useLocation(); // To detect page changes
  const navigate = useNavigate();

  // Step 3: Scroll to top whenever page changes
  useEffect(() => {
    const container = headerContentContainerRef.current;
    if (container) {
      container.scrollTop = 0;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (notification.calculationCompletionCount === 0) {
      return;
    }
    navigate("/");
  }, [notification.calculationCompletionCount, navigate]);

  return (
    <>
      <Layout className="main-layout">
        <Layout>
          <Sidebar />
          <div
            className="header-content-container"
            ref={headerContentContainerRef} // Step 2: Attach the reference to the desired element
          >
            <PageHeader />
            <Content>
              <Outlet />
            </Content>
          </div>
        </Layout>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
