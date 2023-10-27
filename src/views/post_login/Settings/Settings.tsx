import React, { useEffect, useState } from "react";
import "./settings.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/icon-edit.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/icon-profile.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/icon-trash.svg";
import { ReactComponent as LockDotsIcon } from "../../../assets/icons/icon-lock-dots.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../assets/icons/icon-eye-slash.svg";
import { ReactComponent as InfoCircleIcon } from "../../../assets/icons/icon-info-circle.svg";
import { ReactComponent as ImportIcon } from "../../../assets/icons/icon-import.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import DeleteModal from "../../../components/modals/DeleteModal/DeleteModal";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema, profileUpdateSchema } from "../../../common/validations/loginValidations";
import {  passwordChange, profilePicChange } from "../../../redux/pages/loginSlice";
import {  useNavigate } from "react-router-dom";
import { error } from "console";
import { useAppSelector } from "../../../redux/hooks";


const Settings = () => {

  const {
    register:registerPassword,
    handleSubmit:handleSubmitPassword,
    formState: { errors:passwordErrors },
  } = useForm ({
    resolver: yupResolver(changePasswordSchema),
  });

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    setValue,
    formState: { errors: profileErrors },
  } = useForm({
    resolver: yupResolver(profileUpdateSchema),
  })

  const emailInfo = useAppSelector((state)=> state.login.login);

  const [userEmail,setUseremail] = useState<any>()
  const [image, setImage] = useState<any>()
  const [profileImage, setProfileImage] = useState<any>(null);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const changePasswordForm = (submitData:any) => {
    if(submitData){ 
       dispatch(passwordChange(submitData,setIsSuccess));
    };
  }
  const handleFileChange = (e: any) => {
    const fileItem = e?.target?.files[0];
    if (fileItem) {
      var fileName = fileItem?.name,
        idxDot = fileName.lastIndexOf(".") + 1,
        extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
        setValue("profile_image", fileItem);
        setImage(URL.createObjectURL(e.target.files[0]));
      } else {
        // setFileErrorMessage("Only images of type jpg, jpeg, png are allowed!");
      }
    }
  }

 const submitProfileForm = (data: any) => {
  if(data) {
    let formData = new FormData();
  formData.append("name", data?.name);
  formData.append("email", data?.email);
  formData.append("phone", data?.phone);
  
  if(image) {
    formData.append("profile_image", data?.profile_image);
  };
  dispatch(profilePicChange( data.profile_image?.name , setIsSuccess));
  console.log(data,"dataass")
  }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
      setIsSuccess(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (emailInfo) {
      setUseremail(emailInfo);
    }
  }, [emailInfo]);

  return (
    <>
      <div className="settings-page">
        <div className="setting-wrapper">
          <div className="container-lg">
            <div className="title-section">
              <h4 className="section-title">Settings</h4>
            </div>

            <div className="tab-section">
              <div className="nav-wrap">
                <ul
                  className="nav nav-pills mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-general-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-general"
                      type="button"
                      role="tab"
                      aria-controls="pills-general"
                      aria-selected="true"
                    >
                      General
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-payment-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-payment"
                      type="button"
                      role="tab"
                      aria-controls="pills-payment"
                      aria-selected="false"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-security-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-security"
                      type="button"
                      role="tab"
                      aria-controls="pills-security"
                      aria-selected="false"
                    >
                      Security
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-account-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-account"
                      type="button"
                      role="tab"
                      aria-controls="pills-account"
                      aria-selected="false"
                    >
                      Account
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Profile</h4>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="avatar-wrap">
                          <div className="avatar">
                            <img
                              src={image ? image : profileImage ? profileImage : "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                              alt="user image"
                            />
                            <span className="placeholder-icon">
                              <UserIcon />
                            </span>
                          </div>
                          <label className="edit-btn">               
                            <input   onChange={handleFileChange}  style={{ display: "none" }} type="file" accept="image/png, image/jpeg" />
                            <EditIcon />           
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-5">
                            <form onSubmit={handleSubmitProfile(submitProfileForm)}>
                              <div className="form-control-wrap mb-3">
                                <label className="form-label">Name</label>
                                <input
                                  className="form-control"
                                  placeholder="Enter your name"
                                  {...registerProfile('name')}
                                />
                                 {profileErrors.name && <p className="validation-text">{profileErrors.name.message}</p>}
                              </div>

                              <div className="form-control-wrap mb-3">
                                <label className="form-label">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your mail"
                                  {...registerProfile('email')}
                                />
                                  {profileErrors.email && <p className="validation-text">{profileErrors.email.message}</p>}
                              </div>

                              <div className="form-control-wrap mb-3 country-code-selector">
                                <label className="form-label">
                                  Phone Number
                                </label>
                                <input
                              type="text"
                              className={`form-group-control ${profileErrors.phone ? "error-border" : ""}`}
                              {...registerProfile("phone")}
                              name="phone"
                              placeholder="Enter phone number"
                            />
                                 <p className="validation-text">{profileErrors.phone?.message}</p>
                              </div>

                              <div className="mb-4">
                                <button
                                  type="submit"
                                  role="button"
                                  className="btn btn-md btn-primary w-100"
                                 
                                >
                                  Login
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-payment"
                  role="tabpanel"
                  aria-labelledby="pills-payment-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Payment</h4>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="payment-card">
                          <div>
                            <h6 className="course-title">Program in C++</h6>
                          </div>
                          <div>
                            <div className="text-wrap">
                              <p className="text">Success</p>
                              <p className="text">10 June 2023</p>
                              <p className="text">₹ 300</p>
                              <p className="text">UPI</p>
                            </div>
                          </div>
                          <div>
                            <button className="btn btn-sm btn-link">
                              <span className="me-2">
                                <ImportIcon />
                              </span>
                              Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="payment-card">
                          <div>
                            <h6 className="course-title">Program in C++</h6>
                          </div>
                          <div>
                            <div className="text-wrap">
                              <p className="text">Success</p>
                              <p className="text">10 June 2023</p>
                              <p className="text">₹ 300</p>
                              <p className="text">UPI</p>
                            </div>
                          </div>
                          <div>
                            <button className="btn btn-sm btn-link">
                              <span className="me-2">
                                <ImportIcon />
                              </span>
                              Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-security"
                  role="tabpanel"
                  aria-labelledby="pills-security-tab"
                >
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
                        <form onSubmit={handleSubmitPassword(changePasswordForm)}>
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
                                      currentPasswordVisible ? "text"  : "password" }
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
                                      confirmPasswordVisible ? "text": "password"}
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
                                  type="submit" role="button" className="btn btn-md btn-primary w-100 w-md-auto mb-3" >
                                  Change password
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-account"
                  role="tabpanel"
                  aria-labelledby="pills-account-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Delete Account</h4>
                      <p className="desc">
                        By deleting you will lose all the courses you are
                        enrolled, you cannot undo!
                      </p>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        role="button"
                        className="btn btn-md btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <span className="me-2">
                          <TrashIcon />
                        </span>
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

export default Settings;
