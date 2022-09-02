import { createContext, ReactNode } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/* import api from "../../services/api"; */



interface LoginProviderProps {
  children: ReactNode;
}
export interface OnSubmitLoginProps {
  email: string;
  password: string;
}
interface ILoginContext {
  onSubmitLogin: (data: OnSubmitLoginProps) => void;
}
export const LoginContext = createContext<ILoginContext>({} as ILoginContext);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const navigate = useNavigate();

  const onSubmitLogin = async (data: OnSubmitLoginProps) => {
    await axios
      .post("https://rolefy.herokuapp.com/login", data)
      .then((res) => {
        const { accessToken } = res.data;
        const { id } = res.data.user;
        localStorage.setItem("@token", JSON.stringify(accessToken));
        localStorage.setItem("@idUser", JSON.stringify(id));
        navigate("/isLoged");
      })
      .catch((err) => console.log(err));}
  return (
    <LoginContext.Provider value={{ onSubmitLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
