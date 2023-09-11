import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const AdminRoute = () => {
  const { admin } = useAuth();

  const location = useLocation();
  return admin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default AdminRoute;
