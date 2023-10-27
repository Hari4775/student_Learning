import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import RedirectRoute from "./redirectRoute";
//pages
import Register from "../views/pre_login/Register";
import RegistrationSteps from "../views/pre_login/Register/RegistrationSteps/RegistrationSteps";
import PostLoginLayout from "../views/post_login";
import CourseListing from "../views/post_login/CourseListing/CourseListing";
import CourseDetails from "../views/post_login/CourseDetails/CourseDetails";
import Cart from "../views/post_login/Cart/Cart";
import MyLearnings from "../views/post_login/MyLearnings/MyLearnings";
import PaymentResult from "../views/post_login/PaymentResult/PaymentResult";
import Settings from "../views/post_login/Settings/Settings";
import Notifications from "../views/post_login/Notifications/Notifications";
import CourseStreaming from "../views/post_login/CourseStreaming/CourseStreaming";
import Login from "../views/pre_login/Login";
import ProtectedRoutes from "./protectedRoute";
import Paymentpage from "../views/post_login/PaymentPage/PaymentPage";

const AppRoutes: React.FC = () => {

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const isAuthenticated = useAppSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      {/* <Route element={<RedirectRoute isLogged={isLogged} />}> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<Login />} />
      <Route path="/reset-password" element={<Login />} />
      <Route path="/submit-otp" element={<Login />} />
      {/* </Route> */}
      {/* <Route element={<ProtectedRoutes isLogged={isAuthenticated} />}> */}
      <Route path="/" element={<Navigate to="/courses" replace />} />
      <Route path="/finish-registration" element={<RegistrationSteps />} />
      <Route path="/" element={<PostLoginLayout />}>
        <Route path="/courses" element={<CourseListing />} />
        <Route path="/course-details/:slug" element={<CourseDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-learnings" element={<MyLearnings />} />
        <Route path="/payment" element={<Paymentpage/>} />
        <Route path="/payment-status" element={<PaymentResult />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/course-streaming/:slug" element={<CourseStreaming/>} />
      </Route>
      {/* </Route> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
