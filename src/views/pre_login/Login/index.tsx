import React, { useCallback, useEffect, useState } from "react";
import "./login.scss";

// logo
import assuranceLogo from "../../../assets/logos/assurance-logo.svg";

// components
import LoginForm from "./components/LoginForm/LoginForm";
import ResetPasswordForm from "./components/ResetPasswordForm/ResetPasswordForm";
import OTPForm from "./components/OTPForm/OTPForm";
import { useLocation } from "react-router-dom";
import ForgotPasswordForm from "./components/ForgotPasswordForm/ForgotPasswordForm";

const Login = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [email, setEmail] = useState("");

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const formTemplate = useCallback(() => {
    switch (pathname) {
      case "/login":
        return <LoginForm />;
      case "/forgot-password":
        return <ForgotPasswordForm onEmailChange={handleEmailChange} />;
      case "/reset-password":
        return <ResetPasswordForm />;
      case "/submit-otp":
        return <OTPForm email={email} />;
    }
  }, [pathname, email]);

  return (
    <div className="login">
      <div className="row g-0">
        <div className="col-lg-6">
          <div className="left-sec d-none d-lg-block">
            <div className="logo-wrapper">
              <img src={assuranceLogo} className="logo" alt="" />
            </div>
            <div className="sectors-top">
              <div className="sector-wrap">
                <div className="sector-1">
                  <div className="sector-2">
                    <div className="sector-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sectors-bottom">
              <div className="sector-wrap">
                <div className="sector-1">
                  <div className="sector-2">
                    <div className="sector-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-sec-content">
              <div className="mw-575 mx-auto">
                <h1 className="title">Welcome to Assurance</h1>
                <p className="description">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer ten book.
                </p>
              </div>

              <div className="login-left-card">
                <p className="quote">
                  "Online learning is not the next big thing, it is the now big
                  thing.” <br /> - Donna J. Abernathy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-sec">
            <div className="form-area">
              <h4 className="logo-title d-block d-lg-none">Assurance</h4>
              {formTemplate()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
