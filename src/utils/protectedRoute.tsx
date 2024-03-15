import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useSelector((state: RootState) => state.auth);
  return token ? <Outlet /> && children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
