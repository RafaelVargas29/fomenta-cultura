import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function RequireAuth() {
  const { state } = useLocalStorage("token");
  return state ? <Outlet /> : <Navigate to="/login" />;
}
