import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext/UserContext";

export default function ProtectedRoute(children) {
  const { currentUser } = useUserContext();
  if (currentUser) {
    return <Navigate to="/sign-in" />;
  }
  return children || <Outlet />;
}

/* 
  TH1: 
  <Route 
    path="..."
    element={
      <Proted
    }
  />
*/
