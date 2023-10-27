import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../../../../common/validations/loginValidations";
import { useDispatch } from "react-redux";
import { ReactComponent as LockDotsIcon } from "../../../../assets/icons/icon-lock-dots.svg";
import { ReactComponent as LockIcon } from "../../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../../assets/icons/icon-eye-slash.svg";
import { onUpdatePassword } from "../../../../redux/pages/profileSlice";


const ChangePassword = () => {

   const {
      register: registerPassword,
      handleSubmit: handleSubmitPassword,
      formState: { errors: passwordErrors },
   } = useForm({
      resolver: yupResolver(changePasswordSchema),
   });

   const userEmailInfo = useAppSelector((state)=> state.profile.getProfileData);
   const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
   const [passwordVisible, setPasswordVisible] = useState(false);
   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

   const [userEmail, setUseremail] = useState<any>();
   const handleCurrentPasswordVisibility = () => {
      setCurrentPasswordVisible(!currentPasswordVisible);
   };
   const handlePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
   };
   const handleConfirmPasswordVisibility = () => {
      setConfirmPasswordVisible(!confirmPasswordVisible);
   };

   const dispatch = useDispatch<any>();

   useEffect(() => {
      if (userEmailInfo) {
         setUseremail(userEmailInfo?.email);
      }
   }, [userEmailInfo]);

   const onChangePassword = (submitData: any) => {
      if (submitData) {
         dispatch(onUpdatePassword(submitData));
      }
   };


   return (
      <div className="mw-962">
         <div className="tab-title-wrap">
            <h4 className="tab-title">Security</h4>
            <p className="desc">
               You are signed up using the email is{" "}
               <span className="fw-bold">{userEmail}</span>
            </p>
         </div>
         <div className="row">
            <div className="col-12">
               <form
                  onSubmit={handleSubmitPassword(onChangePassword)}
               >
                  <div className="row">
                     <div className="col-12 col-md-5">
                        <div className="form-control-wrap mb-3">
                           <label className="form-label">
                              Current Password
                           </label>
                           <div className="icon-form-control">
                              <div className="start-icon">
                                 <LockDotsIcon />
                              </div>
                              <input
                                 type={
                                    currentPasswordVisible
                                       ? "text"
                                       : "password"
                                 }
                                 className="form-control"
                                 placeholder="Enter current password"
                                 {...registerPassword("current_password")}
                                 name="current_password"
                              />
                              <div className="end-icon">
                                 <button
                                    type="button"
                                    role="button"
                                    onClick={handleCurrentPasswordVisibility}
                                 >
                                    {currentPasswordVisible ? (
                                       <EyeIcon />
                                    ) : (
                                       <EyeSlashedIcon />
                                    )}
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className="form-control-wrap mb-3">
                           <label className="form-label">
                              New Password
                           </label>
                           <div className="icon-form-control">
                              <div className="start-icon">
                                 <LockDotsIcon />
                              </div>
                              <input
                                 type={passwordVisible ? "text" : "password"}
                                 className="form-control"
                                 placeholder="Enter new password"
                                 {...registerPassword("new_password")}
                                 name="new_password"
                              />
                              <div className="end-icon">
                                 <button
                                    type="button"
                                    role="button"
                                    onClick={handlePasswordVisibility}
                                 >
                                    {passwordVisible ? (
                                       <EyeIcon />
                                    ) : (
                                       <EyeSlashedIcon />
                                    )}
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className="form-control-wrap mb-4">
                           <label className="form-label">
                              Confirm Password
                           </label>
                           <div className="icon-form-control">
                              <div className="start-icon">
                                 <LockIcon />
                              </div>
                              <input
                                 type={
                                    confirmPasswordVisible
                                       ? "text"
                                       : "password"
                                 }
                                 className="form-control"
                                 placeholder="Re-enter new password"
                                 {...registerPassword("confirm_password")}
                                 name="confirm_password"
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
                        </div>

                        <div className="d-flex align-items-end">
                           <button
                              type="submit"
                              role="button"
                              className="btn btn-md btn-primary w-100 w-md-auto mb-3"
                           >
                              Change password
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
};

export default ChangePassword;