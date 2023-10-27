import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { showNotification } from "../toast/toast";
import { useAppSelector } from "../../redux/hooks";
import { setErrors as setLoginErrors} from "../../redux/pages/loginSlice";

const ErrorHandler = () => {

  const dispatch = useDispatch<any>();
  const loginErrorInfo = useAppSelector((state) => state.login?.errors);

  const toConvertMessage = (data: any) => {
    let message = "";
    if (data?.errors) {
      message = data?.errors[Object.keys(data?.errors)[0]][0];
    } else {
      message = data?.message;
    }
    return message;
  };

  useEffect(() => {
    if (loginErrorInfo) {
      showNotification({
        message: `${toConvertMessage(loginErrorInfo?.data)}`,
        theme: "light",
        type: "error"
      });
      dispatch(setLoginErrors(null));
    }
  }, [loginErrorInfo]);

  return (<></>);
};

export default ErrorHandler;
