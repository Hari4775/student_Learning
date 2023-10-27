import React from "react";

import { ReactComponent as IconTickCircle } from "../../../../../assets/icons/icon-tick-circle.svg";

const LoginSuccess = () => {
  return (
    <div>
      <div className="login-form">
        <form action="">
          <div className="success-icon mb-5">
            <IconTickCircle />
          </div>

          <div className="mb-4">
            <button
              type="button"
              role="button"
              className="btn btn-lg btn-primary w-100"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSuccess;
