import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Outlet /> && children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
