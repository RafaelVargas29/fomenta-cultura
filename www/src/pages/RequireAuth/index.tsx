import { Navigate, Outlet } from "react-router-dom";

export function RequireAuth() {
  const state = localStorage.getItem("user");
  return state ? <Outlet /> : <Navigate to="/login" />;
}
