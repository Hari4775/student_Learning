import { useEffect, useState } from "react";

// import { ReactComponent as LockDotsIcon } from "../../../../../assets/icons/icon-lock-dots.svg";
// import { ReactComponent as LockIcon } from "../../../../../assets/icons/icon-lock.svg";
// import { ReactComponent as InfoCircleIcon } from "../../../../../assets/icons/icon-info-circle.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ReactComponent as MailIcon } from "../../../../../assets/icons/icon-email.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailValidationSchema } from "../../../../../common/validations/loginValidations";
import { forgotPasswordEmailSubmit } from "../../../../../redux/pages/loginSlice";
interface IVForgotEmail {
  onEmailChange: (email: string) => void;
}

const ForgotPasswordForm: React.FC<IVForgotEmail> = (props) => {
  const { onEmailChange = () => {} } = props;

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailValidationSchema),
  });

  const navigate = useNavigate();

  const [isSuccess, setIsSucess] = useState<boolean>(false);

  const dispatch = useDispatch<any>();

  const forgotPasswordSubmit = (submitData: any) => {
    if (submitData) {
      console.log(submitData, "submitdataa");
      dispatch(forgotPasswordEmailSubmit(submitData, setIsSucess));
      onEmailChange(submitData.email);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/submit-otp");
      setIsSucess(false);
    }
  }, [isSuccess, navigate]);

  return (
    <div className="form-area">
      <h1 className="form-title">Reset password</h1>
      <p className="description">
        Enter your email below and submit to reset password. An email will be
        sent to you with instructions.
      </p>
      <div>
        <div className="login-form">
          <form onSubmit={handleSubmit(forgotPasswordSubmit)}>
            <div className="form-control-wrap mb-3">
              <label className="form-label">Email Address</label>
              <div className="icon-form-control">
                <div className="start-icon">
                  <MailIcon />
                </div>
                <input
                  onChange={(e) => {
                    setValue("email", e.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <p className="validation-text">{errors.email?.message}</p>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                role="button"
                className="btn btn-lg btn-primary w-100"
              >
                Reset Password
                {/* {isLoading ? "Logging in..." : "Login"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
