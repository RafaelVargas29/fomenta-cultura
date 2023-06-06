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
import { redirect } from "react-router-dom";

interface UserProps {
  email: any;
  name: any;
}
interface AuthContextType {
  user: UserProps;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (email: string, password: string) => Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);
export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user.email,
          name: userCredential.user.email?.split("@")[0]
        });
        setIsAuthenticated(true);
        console.log(userCredential);
        return userCredential;
      })
      .catch((error) => {
        return { message: error.message };
      });
  }
  async function logout() {
    console.log("dentro da função logout");
    const res = await signOut(auth);
    console.log("res ", res);
    setIsAuthenticated(false);
    console.log(isAuthenticated);
    redirect("/");
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
        isAuthenticated,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
