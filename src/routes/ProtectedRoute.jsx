import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;

export const ProtectedRouteForUnAuthorizedPage = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};
