/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createContext } from "use-context-selector";
import { User } from "../../model/Users";
import services from "../../services";

interface AuthContextType {
  user: User;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  saveProfileImage: (data: any, id?: string) => Promise<string>;
  updateProfileUser: (data: any, id?: string) => Promise<boolean>;
  getUserById: (id?: string) => Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function saveProfileImage(data: any, id?: string) {
    return await services.users.changeProfileImage(data, id!);
  }

  async function updateProfileUser(data: any, id?: string) {
    const userResult = await services.users.updateProfile(data, id);
    if (userResult) {
      toast.success("sucesso!");
      return userResult;
    } else {
      toast.error("Ops, algo deu errado");
      return userResult;
    }
  }

  async function getUserById(id?: string) {
    return await services.users.getUser(id);
  }

  async function loadUser() {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const userResult = await services.users.getUser(
        loggedInUser.split('"')[1]
      );
      setUser(userResult);
    }
  }
  async function login(email: string, password: string) {
    const result = await services.authenticate.login(email, password);
    return result;
  }

  async function logout() {
    await services.authenticate.logout();
  }

  async function register(email: string, password: string): Promise<void> {
    const userResult = await services.authenticate.register(email, password);
    if (userResult) {
      toast.success("Usuário cadastrado com sucesso!");
    } else {
      toast.error("Ops, algo deu errado, usuário já existe.");
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        updateProfileUser,
        saveProfileImage,
        getUserById,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
