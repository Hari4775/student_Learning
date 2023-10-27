import { watch } from "fs";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/bootstrap.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Value } from "sass";
import { yupResolver } from "@hookform/resolvers/yup";
import { mobileValidationSchema } from "../../../../../common/validations/loginValidations";
import { mobileValidation } from "../../../../../redux/pages/loginSlice";

interface IVMobile {
  setIndex: (data: any) => void;
  onPhoneNumberChange: (phoneNumber: string) => void;
}

const MobileNumberVerification = forwardRef<any, IVMobile>((props, ref) => {
  const { setIndex = () => {}, onPhoneNumberChange = () => {} } = props;

  const phoneFormRef = useRef<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mobileValidationSchema),
  });
  useImperativeHandle(ref, () => ({
    onSaveTrigger: () => {
      phoneFormRef?.current?.requestSubmit();
    },
  }));
  useEffect(() => {
    if (isSuccess) {
      navigate("finish-registration");
      setIsSucess(false);
    }
  }, [isSuccess]);

  const onMobileSubmit = (data: any) => {
    if (data) {
      const phoneNumber = data.phone;
      onPhoneNumberChange(phoneNumber);
      dispatch(mobileValidation({ phone: phoneNumber }, setIndex));
    }
  };

  return (
    <div className="mw-480 mx-auto mb-5">
      <div className="form-control-wrap mb-3 country-code-selector">
        <label className="form-label">Mobile number</label>
        <form ref={phoneFormRef} onSubmit={handleSubmit(onMobileSubmit)}>
          <PhoneInput
            country={"in"}
            inputProps={{
              name: "phone",
            }}
            onChange={(value, country, event) => {
              setValue("phone", value);
            }}
          />
        </form>
      </div>
      <p className="validation-text">{errors.phone?.message}</p>
    </div>
  );
});

export default MobileNumberVerification;
