import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { axiosInstance } from "../../common/interceptors/axiosConfig";
import { showNotification } from "../../common/toast/toast";

export interface ProfileState {
   errors: any;
   isLoading: boolean;
   getProfileData:any;
   profileDataUpdate:any;
}

const initialState: ProfileState = {
   errors: null,
   isLoading: false,
   getProfileData:[],
   profileDataUpdate:[],
};

const ProfileSlice = createSlice({
   name: "profile",
   initialState,
   reducers: {
      setErrors: (state, { payload }: PayloadAction<any>) => {
         state.errors = payload;
      },
      setLoading: (state, { payload }: PayloadAction<any>) => {
         state.isLoading = payload;
      },
      setgetProfileData: (state, { payload }: PayloadAction<any>) => {
         state.getProfileData  = payload;
      },
      setProfileImage:  (state, { payload }: PayloadAction<any>) => {
         state.profileDataUpdate= payload;
      },
   },
});

export const onUpdatePassword = (body: { password: string; new_password: string; confirm_password: string }): AppThunk => async (dispatch) => {
   dispatch(setLoading(true));
   try {
     let URL = "/profile/change/password";
     const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true, });
     if (response.data) {
       if (response.data.status && response.data.status === "success") {
       dispatch(setLoading(false));
       showNotification({
         message: "Profile password updated.",
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

 export const getProfileData = (): AppThunk => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      let URL = "/profile/index";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: null }, token: true, });
      if (response.data) {
         if (response.data.status && response.data.status === "success") {
            dispatch(setLoading(false));
            if (response.data && response.data.status === "success") {
               dispatch( setgetProfileData(response.data?.profile));
            }
         }
      }
   } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
   }
};

export const profileDataUpdate = (body: any,image:any): AppThunk => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      let URL = "/profile/image/update";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true, });
      if (response.data) {
         if (response.data.status && response.data.status === "success") {
            dispatch(setLoading(false));
            showNotification({
               message: "Profile data updated.",
               theme: "light",
               type: "success",
            });
            dispatch( setProfileImage(image));
         }
      }
   } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
   }
};

export const deleteAccount = (setIsSuccess:any): AppThunk => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      let URL = "/delete/account";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: null }, token: true, });
      if (response.data) {
         if (response.data.status && response.data.status === "success") {
            dispatch(setLoading(false));
            showNotification({
               message: "Account Deleted.",
               theme: "light",
               type: "success",
            });
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
   setgetProfileData,
   setProfileImage ,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
