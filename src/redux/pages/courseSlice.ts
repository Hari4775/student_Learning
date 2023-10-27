import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { axiosInstance } from "../../common/interceptors/axiosConfig";

export interface courseState {
    errors: any;
    isLoading: boolean;
    courseList: any;
    successFlag: boolean;
    courseCategory: any[];
    courseDetails:any[];
    cartList:any[];
    mylearningList:any[];
    getWishList:any[];
    myLearningDetails:any[];
}

const initialState: courseState = {
    errors: null,
    isLoading: false,
    courseList: [],
    successFlag: false,
    courseDetails:[],
    courseCategory:[],
    cartList:[],
    mylearningList:[],
    getWishList:[],
    myLearningDetails:[],
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setErrors: (state, { payload }: PayloadAction<any>) => {
            state.errors = payload;
        },
        setLoading: (state, { payload }: PayloadAction<any>) => {
            state.isLoading = payload;
        },
        setCourseList: (state, { payload }: PayloadAction<any>) => {
            state.courseList = payload;
        },
        setCourseDetails: (state, { payload }: PayloadAction<any>) => {
            state.courseDetails = payload;
        },
        setCourseCategory: (state, { payload }: PayloadAction<any>) => {
            state.courseCategory = payload;
        },
        setCartList:(state, { payload }: PayloadAction<any>) => {
            state.cartList = payload;
        },
        setmylearningList:(state, { payload }: PayloadAction<any>) =>{
          state.mylearningList = payload;
        },
        setGetWishList:(state, { payload }: PayloadAction<any>) =>{
          state.getWishList = payload;
        }, 
        setmylearningDetails :(state, { payload }: PayloadAction<any>) =>{
          state.myLearningDetails = payload;
        }, 


    }
});

export const getCourseList = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        let URL = '/course/list';
        const response = await axiosInstance({ data: { url: URL, method: 'post', data: null }, token: true });
        if (response.data) {
            if (response.data.status && response.data.status === 'success') {
                dispatch(setLoading(false));
                if (response.data?.course && response.data?.course?.data) {
                    dispatch(setCourseList(response.data?.course?.data));
                }
            }
        }
    } catch (error: any) {
        dispatch(setLoading(false));
        dispatch(setErrors(error?.response))
    }
};

export const getCourseDetails = ( id:string, slug:string): AppThunk => async (dispatch) => {                  
    dispatch(setLoading(true));
    try {
      let URL = "/course/details";
      const requestData = {id,slug};
      const response = await axiosInstance({ data: { url: URL, method: "post", data: requestData },token: true,});
      if (response.data) {
        if (response.data.status && response.data.status === 'success') {
          dispatch(setLoading(false));
        if (response.data?.course && response.data?.course) {
            dispatch(setCourseDetails(response.data?.course));
        }
      }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };
  

export const getcourseCategory = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        let URL = '/program/list';
        const response = await axiosInstance({ data: { url: URL, method: 'post', data: null }, token: true });
        if (response.data) {
            if (response.data.status && response.data.status === 'success') {              
                dispatch(setCourseCategory(response?.data?.program)) 
                dispatch(setLoading(false));   
            }
        }
    } catch (error: any) {
        dispatch(setLoading(false));
        dispatch(setErrors(error?.response))
    }
};


export const courseCartStore = (body:{ program_id:any ; subject_id:any}): AppThunk => async (dispatch) => {                  
    dispatch(setLoading(true));
    try {
      let URL = "/cart/store";
      const response = await axiosInstance({ data: { url: URL, method: "post", data: body }, token: true,});
      if (response.data) {
        if (response.data.status && response.data.status === 'success') {
          dispatch(setLoading(false));
      }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

  export const getCartList = (): AppThunk => async (dispatch) => {                  
    dispatch(setLoading(true));
    try {
      let URL = "/cart/index";
      const response = await axiosInstance({  data: { url: URL, method: "post", data: null }, token: true,});
      if (response.data) {
        if (response.data.status && response.data.status === 'success') {
          dispatch(setLoading(false));
        if (response.data ?.cart_items && response.data ?.cart_items) {
            dispatch(setCartList(response.data.cart_items));
        }
      }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };
  
  export const removeCart = (body:{ cart_id:any ; item_id:any}): AppThunk => async (dispatch) => {                  
    dispatch(setLoading(true));
    try {
      let URL = "/cart/delete/item";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body }, token: true,});
      if (response.data) {
        if (response.data.status && response.data.status === 'success') {
          dispatch(setLoading(false));
      }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };
  
  export const cartCheckout = (): AppThunk => async (dispatch) => {                  
    dispatch(setLoading(true));
    try {
      let URL = "/cart/checkout";
      const response = await axiosInstance({  data: { url: URL, method: "post", data: null }, token: true,});
      if (response.data) {
        if (response.data.status && response.data.status === 'success') {
          dispatch(setLoading(false));
          console.log(response.data,"respond data  cart checkout")
      }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

  
export const mylearningList = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/mylearnings";
    const response = await axiosInstance({ data: { url: URL, method: "post", data: null },  token: true, });
    if (response.data) {
      if (response.data.status && response.data.status === "success") {
        dispatch(setLoading(false));
        if (response.data) {
          dispatch(setmylearningList(response.data?.course));
        }
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};

export const myLearningDetails =  ( id:string, slug:string): AppThunk => async (dispatch) => {                  
  dispatch(setLoading(true));
  try {
    let URL = "/mylearnings/details";
    const requestData = {id,slug};
    const response = await axiosInstance({ data: { url: URL, method: "post", data: requestData },token: true,});
    if (response.data) {
      if (response.data.status && response.data.status === 'success') {
        dispatch(setLoading(false));
      if (response.data?.course && response.data?.course) {
          dispatch(setmylearningDetails(response.data?.course));
      }
    }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};



export const addtoWishListStore = (body:{subject_id:any}): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/wishlist/store";
    const response = await axiosInstance({ data: { url: URL, method: "post", data: body },  token: true, });
    if (response.data) {
      if (response.data.status && response.data.status === "success") {
        dispatch(setLoading(false));
        if (response.data) {
        }
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};

export const deleteWishListStore = (body:{subject_id:any}): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/wishlist/delete";   
    const response = await axiosInstance({ data: { url: URL, method: "post", data: body },  token: true, });
    if (response.data) {
      if (response.data.status && response.data.status === "success") {
        dispatch(setLoading(false));
        if (response.data) {
        }
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};

export const getWishList= (): AppThunk => async (dispatch) => {                  
  dispatch(setLoading(true));
  try {
    let URL = "/wishlist/index";
    const response = await axiosInstance({  data: { url: URL, method: "post", data: null }, token: true,});
    if (response.data) {
      if (response.data.status && response.data.status === 'success') {
        dispatch(setLoading(false));
      if (response.data?.wishlist && response.data?.wishlist) {
        dispatch(setGetWishList(response.data?.wishlist));   
      }
    }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};
 
export const { setLoading, setErrors, setCourseList, setCourseCategory,setCourseDetails,setCartList,setmylearningList,setGetWishList,setmylearningDetails} =
 courseSlice.actions;

export default courseSlice.reducer;
