import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { axiosInstance } from "../../common/interceptors/axiosConfig";
import { showNotification } from "../../common/toast/toast";

export interface LoginState {
  errors: any;
  isLoading: boolean;
  isAuthenticated: boolean;
  accessToken: any;
  isSignup: any;
  login:any;

}

const initialState: LoginState = {
  errors: null,
  isLoading: false,
  isAuthenticated: false,
  accessToken: null,
  isSignup: null,
  login:null,

};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<any>) => {
      state.errors = payload;
    },
    setLoading: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = payload;
    },
    setIsAuthenticated: (state, { payload }: PayloadAction<any>) => {
      state.isAuthenticated = payload;
    },
    setAccessToken: (state, { payload }: PayloadAction<any>) => {
      state.accessToken = payload;
    },
    setSignup: (state, { payload }: PayloadAction<any>) => {
      state.accessToken = payload;
    },
    setEmail:(state, { payload }: PayloadAction<any>) => {
      state.login = payload;
    },
  }
});

export const login = (body: any, setIsSuccess: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/login";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body },token: false,});
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          sessionStorage.setItem("token", response.data.token);
          dispatch(setIsAuthenticated(true));
          dispatch(setAccessToken(response.data.token));
          dispatch(setEmail(body.email));
          setIsSuccess(true);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/logout";
    const response = await axiosInstance({ data: { url: URL, method: "post" },token: true, });
    if (response.data) {
      dispatch(setLoading(false));
      if (response.data.status && response.data.status === "success") {
        sessionStorage.clear();
        dispatch(setIsAuthenticated(false));
        dispatch(setAccessToken(""));
      }
    }
  } catch (error: any) {
    dispatch(setErrors(error?.response));
    dispatch(setLoading(false));
  }
};

export const signup = (body: any, setIsSuccess: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/register";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: false, });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          sessionStorage.setItem("studentToken", response.data.token);
          dispatch(setIsAuthenticated(true));
          dispatch(setAccessToken(response.data.token));
          setIsSuccess(true);
          showNotification({
            message: "Registration success.",
            theme: "light",
            type: "success",
          });
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const forgotPasswordEmailSubmit = (body: { otp: string; phone: string }, setIsSuccess: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    console.log(body, "bodyy email");
    try {
      let URL = "/forgot/password";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: false,});
      if (response.data) {
        console.log(response.data, "response dataaa email");
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          setIsSuccess(true);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const emailOtp = (body: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/verify/email/otp";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: false, });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const mobileValidation = (body: any, setIndex: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const URL = "/generate/phone/otp";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body },token: true, });
      if (response.data) {
        console.log(response.data,"otp")
        dispatch(setLoading(false));
        if (response.data && response.data.status === "success") {
          setIndex(1);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const passwordReset =( body: { password: string; confirm_password: string }, setIsSuccess: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/forgot/passwor/change/password";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: false, });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          setIsSuccess(true);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const mobileOtp = (body: { otp: string; phone: string }, setIndex: any): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const URL = "verify/phone/otp";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true, });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data && response.data.status === "success") {
          setIndex(2);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const registerFinish = (body: any, setIndex: any): AppThunk => async (dispatch) => {
   dispatch(setLoading(true));
    try {
      let URL = "register/finish";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true, });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

  
export const passwordChange= (body:{password:string; new_password:string; confirm_password:string},setIsSuccess:any): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(body, "bodyy change password");
  try {
    let URL = "/profile/change/password";
    const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true,});
    if (response.data) {
      console.log(response.data, "response dataaa change pswd");
      dispatch(setLoading(false));
      if (response.data.status && response.data.status === "success") {
        setIsSuccess(true);
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};
  
export const profilePicChange= (body:{profile_image:any},setIsSuccess:any ): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(body, "pic changeess");
  try {
    let URL = "/profile/image/update";
    const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true,});
    if (response.data) {
      console.log(response.data, "response image update");
      dispatch(setLoading(false));
      if (response.data.status && response.data.status === "success") {
        setIsSuccess(true);
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};

  

export const {
  setErrors,
  setLoading,
  setIsAuthenticated,
  setAccessToken,
  setSignup,
  setEmail,  
} = LoginSlice.actions;

export default LoginSlice.reducer;
