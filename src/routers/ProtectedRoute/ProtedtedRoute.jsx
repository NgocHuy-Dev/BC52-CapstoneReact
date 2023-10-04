import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext/UserContext";

export default function ProtedtedRoute({ children }) {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (!currentUser) {
    // user chưa đăng nhập => redirect về trang signin
    const url = `/sign-in?redirectTo=${location.pathname}`;
    return <Navigate to={url} replace />;
  }

  return children || <Outlet />;
}

/*
  TH1:
  <Route
    path="..."
    element={
      <ProtedtedRoute>
        <Component />
      </ProtedtedRoute>
    }
  />

  TH2:
  <Route element={<ProtectedRoute />}>
    <Route path=".." element={<Component />} />
    // Định nghĩa các Route khác muốn được protect
  </Route>
*/
