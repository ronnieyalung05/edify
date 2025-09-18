// PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { session } = useAuth();

  if (session) {
    // Already logged in → send them to home
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
