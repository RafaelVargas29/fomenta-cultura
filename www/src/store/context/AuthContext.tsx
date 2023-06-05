/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext } from "use-context-selector";
import { auth } from "../../config/firebase";
import { toast } from "react-toastify";

interface AuthContextType {
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

  async function login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsAuthenticated(true);
        console.log("handle createContext", userCredential);
        console.log("is aujt", isAuthenticated);
        return userCredential;
      })
      .catch((error) => {
        return { message: error.message };
      });
  }
  async function logout() {
    setIsAuthenticated(false);
    await signOut(auth);
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
