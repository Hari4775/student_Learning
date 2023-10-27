import { Navigate, Outlet } from "react-router-dom";

interface RedirectRouteProps {
  isLogged: boolean;
}

const RedirectRoute: React.FC<RedirectRouteProps> = ({ isLogged }) => {
  return (
    !isLogged ? <Outlet /> : <Navigate to="/courses" replace={true} />
  );
};

export default RedirectRoute;