"use client";

import { createContext, useContext, useState } from "react";

export type AuthContex = {
  isAuth: boolean;
  setIsAuth: (v: boolean) => void;
};

const defaultContextValues = {
  isAuth: false,
  setIsAuth: () => {},
};

const AuthContext = createContext<AuthContex>(defaultContextValues);

export type AuthContextProviderProps = {
  children?: React.ReactNode;
};

export function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
