import React, { useState, useEffect } from "react";

import { ReactComponent as LockDotsIcon } from "../../../../../assets/icons/icon-lock-dots.svg";
import { ReactComponent as LockIcon } from "../../../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../../../assets/icons/icon-eye-slash.svg";
import { ReactComponent as InfoCircleIcon } from "../../../../../assets/icons/icon-info-circle.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../../../../../common/validations/loginValidations";
import { passwordReset } from "../../../../../redux/pages/loginSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const resetPasswordSubmit = (submitData: any) => {
    if (submitData) {
      dispatch(passwordReset(submitData, setIsSuccess));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
      setIsSuccess(false);
    }
  }, [isSuccess]);

  return (
    <div className="form-area">
      <h4 className="logo-title d-block d-lg-none">Assurance</h4>
      <h1 className="form-title">Reset Password</h1>
      <p className="description">Reset your password here</p>
      <div>
        <div className="reset-password-form">
          <form onSubmit={handleSubmit(resetPasswordSubmit)}>
            <div className="form-control-wrap mb-3">
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
                  <LockDotsIcon />
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
            <div className="form-control-wrap mb-4">
              <label className="form-label">Confirm Password</label>
              <div className="icon-form-control">
                <div className="start-icon">
                  <LockIcon />
                </div>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  className="form-control"
                  {...register("confirm_password")}
                  name="confirm_password"
                  placeholder="Re-enter password"
                />
                <div className="end-icon">
                  <button
                    type="button"
                    role="button"
                    onClick={handleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? <EyeIcon /> : <EyeSlashedIcon />}
                  </button>
                </div>
              </div>
              <p className="validation-text">
                {errors.confirm_password?.message}
              </p>
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-lg btn-primary w-100">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
