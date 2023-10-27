import React, { useEffect, useState } from "react";

import { ReactComponent as LockIcon } from "../../../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../../../assets/icons/icon-eye-slash.svg";
import { ReactComponent as MailIcon } from "../../../../../assets/icons/icon-email.svg";
import { ReactComponent as InfoCircleIcon } from "../../../../../assets/icons/icon-info-circle.svg";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../redux/hooks";
import { login } from "../../../../../redux/pages/loginSlice";
import { loginSchema } from "../../../../../common/validations/loginValidations";

interface IVLogin {
  email: string,
  password: string
}

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IVLogin>({
    resolver: yupResolver(loginSchema)
  });

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const dispatch = useDispatch<any>();
  const isLoading = useAppSelector((state) => state.login.isLoading);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onLoginSubmit = (submitData: any) => {
    dispatch(login(submitData, setIsSuccess));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/courses");
      setIsSuccess(false);
    }
  }, [isSuccess]);

  return (
    <div className="form-area">
      <h4 className="logo-title d-block d-lg-none">Assurance</h4>
      <h1 className="form-title">Welcome Back!</h1>
      <p className="description">Login & continue learning</p>
      <div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onLoginSubmit)} action="">
            <div className="form-control-wrap mb-3">
              <label className="form-label">Email</label>
              <div className="icon-form-control">
                <div className="start-icon">
                  <MailIcon />
                </div>
                <input
                  className="form-control"
                  placeholder="Enter your email"
                  {...register("email")}
                  name="email"
                />
              </div>
              <p className="validation-text">{errors.email?.message}</p>
            </div>

            <div className="form-control-wrap mb-4">
              <div className="d-flex justify-content-between">
                <label className="form-label">Password</label>
                <span className="me-2 password-info-icon">
                  <button
                    type="button"
                    className="tooltip-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This top tooltip is themed via CSS variables."
                  >
                    <InfoCircleIcon />
                  </button>
                  <div className="tooltip-dropdown">
                    <div className="tooltip-content-wrap">
                      <h6 className="tooltip-title">Password Rule</h6>
                      <p className="tooltip-hints">
                        Password must be 8 - 12 symbols long
                      </p>
                      <p className="tooltip-hints">Must be alpha-numeric</p>
                      <p className="tooltip-hints">
                        Must be contain special symbols
                      </p>
                      <div className="triangle-shape">
                        <div className="triangle-with-shadow"></div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
              <div className="icon-form-control">
                <div className="start-icon">
                  <LockIcon />
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  {...register("password")}
                  name="password"
                />
                <div className="end-icon">
                  <button
                    type="button"
                    role="button"
                    onClick={handlePasswordVisibility}
                  >
                    {passwordVisible ? <EyeIcon /> : <EyeSlashedIcon />}
                  </button>
                </div>
              </div>
              <p className="validation-text">{errors.password?.message}</p>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                role="button"
                className="btn btn-lg btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-wrap link-sec">
              <p className="desc me-2">Don't have an account?</p>
              <Link to="/register" role="button" className="btn btn-link">
                Sign Up
              </Link>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <Link to="/forgot-password" role="button" className="btn btn-link text-blue">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
