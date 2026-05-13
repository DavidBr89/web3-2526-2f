import React, { type PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const ProtectedRoute = (props: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    props.children
  ) : (
    <Navigate to="/login" state={{ origin: "/profile" }} />
  );
};

export default ProtectedRoute;
