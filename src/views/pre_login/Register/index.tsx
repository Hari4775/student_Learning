import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import "./register.scss";

// logo
import assuranceLogo from "../../../assets/logos/assurance-logo.svg";

// icons
import { ReactComponent as LockDotsIcon } from "../../../assets/icons/icon-lock-dots.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../assets/icons/icon-eye-slash.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/icon-user.svg";
import { ReactComponent as MailIcon } from "../../../assets/icons/icon-email.svg";
import { ReactComponent as InfoCircleIcon } from "../../../assets/icons/icon-info-circle.svg";
import { signup } from "../../../redux/pages/loginSlice";
import { signupSchema } from "../../../common/validations/loginValidations";

interface IVSignUp {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {

  const { register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IVSignUp>({
    resolver: yupResolver(signupSchema)
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch<any>()

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  useEffect(() => {
    if(isSuccess) {
      navigate("/finish-registration");
      setIsSuccess(false);
    }
  },[isSuccess]);

  const onSignupSubmit = (submitData: any) => {
    if(submitData) {
      dispatch(signup(submitData, setIsSuccess));
    }
  }

  return (
    <div className="register">
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

              <div className="image-sec">
                <div className="row">
                  <div className="col-6 d-flex justify-content-center ">
                    <div className="avatar-wrap avatar-1">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="avatar-wrap avatar-2">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 mt-5">
                    <div className="avatar-wrap avatar-3">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 mt-5">
                    <div className="avatar-wrap avatar-4">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-sec">
            <div className="form-area">
              <h4 className="logo-title d-block d-lg-none">Assurance</h4>
              <h1 className="form-title">Get started</h1>
              <p className="description">Create new account by enter details</p>
              <form onSubmit={handleSubmit(onSignupSubmit)} action="">
                <div className="form-control-wrap mb-3">
                  <label className="form-label">Name</label>
                  <div className="icon-form-control">
                    <div className="start-icon">
                      <UserIcon />
                    </div>
                    <input
                      className="form-control"
                      placeholder="Enter your name"
                      {...register("name")}
                    />
                  </div>
                  <p className="validation-text">{errors.name?.message}</p>
                </div>
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
                    />
                  </div>
                  <p className="validation-text">
                    {errors.email?.message}
                  </p>
                </div>
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
                  <p className="validation-text">
                    {errors.password?.message}
                  </p>
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
                      placeholder="Re-enter password"
                      {...register("confirm_password")}
                    />
                    <div className="end-icon">
                      <button
                        type="button"
                        role="button"
                        onClick={handleConfirmPasswordVisibility}
                      >
                        {confirmPasswordVisible ? (
                          <EyeIcon />
                        ) : (
                          <EyeSlashedIcon />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="validation-text">
                    {errors.confirm_password?.message}
                  </p>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-lg btn-primary w-100"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-wrap link-sec">
                  <p className="desc me-2">Already have an account?</p>
                  <Link to="/login" role="button" className="btn btn-link">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
