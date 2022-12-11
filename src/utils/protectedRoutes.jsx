import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
};
