import { Footer } from "globalComponents";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="page-layout">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
