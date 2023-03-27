import { COMPANY_LOGO } from "assets";
import { LANDING_PAGE_MEETING } from "assets";
import { Footer } from "globalComponents";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const pathname = useLocation().pathname;

  const heading =
    pathname === "/auth/register"
      ? "Register your new account"
      : "Login to your account";

  return (
    <div className="auth-layout">
      <div className="page-layout">
        <div className="page-container auth-page-container">
          <div className={"auth-landing"}>
            <img
              src={LANDING_PAGE_MEETING}
              alt={"meeting"}
              className={"auth-landing-image"}
            />
          </div>
          <div className="auth-form-container">
            <img src={COMPANY_LOGO} alt="" className="sigin-logo" />

            <div className="greetings">
              <p>Welcome Back</p>
              <h1>{heading}</h1>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
