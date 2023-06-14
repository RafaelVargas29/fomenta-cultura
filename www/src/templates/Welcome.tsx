import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../store/context/AuthContext";

export function Welcome() {
  const user = useContextSelector(AuthContext, (context) => context.user);
  return (
    <strong className="text-xl mt-6 block">Bem-vindo, {user?.name}!</strong>
  );
}
