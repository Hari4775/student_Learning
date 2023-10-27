import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileUpdateSchema } from "../../../../common/validations/loginValidations";

//icons
import { ReactComponent as UserIcon } from "../../../../assets/icons/icon-profile.svg";
import { ReactComponent as EditIcon } from "../../../../assets/icons/icon-edit.svg";
//redux
import { getProfileData, profileDataUpdate, setgetProfileData} from "../../../../redux/pages/profileSlice";
import { useAppSelector } from "../../../../redux/hooks";

const General = () => {
  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    setValue,
    formState: { errors: profileErrors },
  } = useForm({
    resolver: yupResolver(profileUpdateSchema),
  });

  const profileDataInfo = useAppSelector(
    (state) => state.profile.getProfileData
  );
  const profileImageInfo = useAppSelector(
    (state) => state.profile.profileDataUpdate
  );
  const [name, setName] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [mail, setMail] = useState<any>();
  const [fileErrorMessage, setFileErrorMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const dispatch = useDispatch<any>();
  const defaultImage = "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const [image, setImage] = useState<any>(null);
  const [profileImage, setProfileImage] = useState<any>(null);

  useEffect(() => {
    dispatch(getProfileData());
    return () => {
      dispatch(setgetProfileData([]));
    };
  }, []);

  useEffect(() => {
    if (profileDataInfo) {
      setName(profileDataInfo?.name);
      setPhone(profileDataInfo?.phone);
      setMail(profileDataInfo?.email);
    }
  }, [profileDataInfo]);

  const handleFileChange = (e: any) => {
    setFileErrorMessage("");
    const fileItem = e?.target?.files[0];
    if (fileItem) {
      var fileName = fileItem?.name,
        idxDot = fileName.lastIndexOf(".") + 1,
        extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
        setValue("profile_image", fileItem);
        setImage(URL.createObjectURL(e.target.files[0]));
        setIsSuccess(true);
      } else {
        setFileErrorMessage("Only images of type jpg, jpeg, png are allowed!");
      }
    }
  };

  const submitProfileForm = (data: any) => {
    if (data) {
      let formData = new FormData();
      formData.append("name", data?.name);
      formData.append("email", data?.email);
      formData.append("phone", data?.phone);
      if (image) {
        formData.append("profile_image", data?.profile_image);
      }
      dispatch(profileDataUpdate(formData, image));
    }
  };

  useEffect(() => {
    setProfileImage(profileImageInfo);
  }, [isSuccess]);

  return (
    <div className="mw-962">
      <div className="tab-title-wrap">
        <h4 className="tab-title">Profile</h4>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="avatar-wrap">
            <div className="avatar">        
              <img
                src={ image ||  profileImage }
               //  alt="user image"
              />
               <span className="placeholder-icon">
                 <UserIcon />
               </span>
            </div>
            <label className="edit-btn">
              <input
                onChange={handleFileChange}
                style={{ display: "none" }}
                type="file"
                accept="image/png, image/jpeg"
              />
              <EditIcon />
            </label>
          </div>
          {fileErrorMessage ? (
            <div className="form-control-wrap mb-3">
              <p className="validation-text">{fileErrorMessage}</p>
            </div>
          ) : null}
          <div className="row">
            <div className="col-12 col-md-5">
              <form onSubmit={handleSubmitProfile(submitProfileForm)}>
                <div className="form-control-wrap mb-3">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    placeholder={name}
                    {...registerProfile("name")}
                  />
                  {profileErrors.name && (
                    <p className="validation-text">
                      {profileErrors.name.message}
                    </p>
                  )}
                </div>

                <div className="form-control-wrap mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={mail}
                    {...registerProfile("email")}
                  />
                  {profileErrors.email && (
                    <p className="validation-text">
                      {profileErrors.email.message}
                    </p>
                  )}
                </div>

                <div className="form-control-wrap mb-3 country-code-selector">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className={`form-control ${
                      profileErrors.phone ? "error-border" : ""
                    }`}
                    {...registerProfile("phone")}
                    name="phone"
                    placeholder={phone}
                  />
                  <p className="validation-text">
                    {profileErrors.phone?.message}
                  </p>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-md btn-primary w-100"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
