import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/Slices/user/userSlice";

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsLoggedIn);
  // Uncomment this line when the app goes live
  // return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
}

export default ProtectedRoute;
