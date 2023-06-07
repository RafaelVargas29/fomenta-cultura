/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext } from "use-context-selector";
import { auth } from "../../config/firebase";
import { toast } from "react-toastify";

interface UserProps {
  email: any;
  name: any;
}
interface AuthContextType {
  user: UserProps;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (email: string, password: string) => Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);
export function AuthProvider({ children }: AuthProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        setUser({
          email: userCredential.user.email,
          name: userCredential.user.email?.split("@")[0]
        });
        //usar o token aqui
        localStorage.setItem(
          "token",
          JSON.stringify(userCredential.user.accessToken)
        );
        return "";
      })
      .catch(() => {
        return "error";
      });
  }
  async function logout() {
    await signOut(auth);
    localStorage.removeItem("token");
  }
  async function register(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Usuário cadastrado com sucesso!");
        return userCredential.user;
      })
      .catch((error) => {
        toast.error("Ops, algo deu errado, usuário já existe.");
        return {
          code: error.code
        };
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
