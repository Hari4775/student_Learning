import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAccessToken, setIsAuthenticated } from "./redux/pages/loginSlice";
import { ToastContainer } from "react-toastify";
import ErrorHandler from "./common/errorHandler/errorHandler";

function App() {

  const dispatch = useDispatch<any>();

  useEffect(() => {
    if(sessionStorage.getItem('studentToken')) {
      dispatch(setIsAuthenticated(true));
      dispatch(setAccessToken(sessionStorage.getItem('studentToken')));
    }
  },[]);
  
  return (
    <Router>
      <AppRoutes />
      <ErrorHandler/>
      <ToastContainer/>
    </Router>
  );
}

export default App;
