import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";


const StatusRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user?.badge==="gold") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default StatusRoute;
