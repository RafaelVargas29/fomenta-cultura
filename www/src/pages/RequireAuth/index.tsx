import { Navigate, Outlet } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../store/context/AuthContext";

export function RequireAuth() {
  const { isAuth } = useContextSelector(AuthContext, (context) => {
    return {
      isAuth: context.isAuthenticated
    };
  });
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
