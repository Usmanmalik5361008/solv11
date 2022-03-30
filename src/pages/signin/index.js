import { COMPANY_LOGO, EMAIL_ICON, EYE_CROSSED } from "assets";
import { InputField } from "globalComponents";
import React from "react";
import "./index.scss";

const SigninPage = () => {
  return (
    <div className="page-container sigin-page-container">
      <div className="sigin-form-container">
        <img src={COMPANY_LOGO} alt="" className="sigin-logo" />

        <div className="greetings">
          <p>Welcome Back</p>
          <h1>Login to your account</h1>
        </div>
        <div>
          <form>
            <div className="form-field">
              <label>Email</label>
              <InputField name="email" prependIcon={EMAIL_ICON} />
            </div>
            <div className="form-field">
              <label>Password</label>
              <InputField name="password" prependIcon={EYE_CROSSED} />
            </div>
            <select className="dropdown-style-1">
              <option>Production</option>
              <option>Developement</option>
            </select>

            <button className="btn-gradient">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
