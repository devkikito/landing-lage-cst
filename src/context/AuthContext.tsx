"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { parseCookies, destroyCookie } from "nookies";

interface AuthContextType {
  user: UserPayload | null;
  accessToken: string | null;
  setAuthData: (token: string) => void;
  logout: () => void;
}

interface UserPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      handleToken(storedToken);
    }
  }, []);

  const handleToken = (token: string) => {
    try {
      const decodedUser: UserPayload = jwtDecode(token);
      setAccessToken(token);
      setUser(decodedUser);
      localStorage.setItem("accessToken", token);
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      logout();
    }
  };

  const setAuthData = (token: string) => {
    handleToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    destroyCookie(undefined, "biomob-pd.token");
    destroyCookie(undefined, "biomob-pd.refresh-token");
  };

  return <AuthContext.Provider value={{ user, accessToken, setAuthData, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
