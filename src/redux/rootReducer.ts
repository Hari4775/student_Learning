import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./pages/loginSlice";
import courseSlice from "./pages/courseSlice";

const rootReducer = combineReducers({
    login: loginSlice,
    course: courseSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;