// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { session } = useAuth();

  if (!session) {
    // User is not logged in → redirect to signin
    return <Navigate to="/signin" replace />; // what is 'replace?'
  }

  // User is logged in → render the child component
  return children;
};

export default ProtectedRoute;
