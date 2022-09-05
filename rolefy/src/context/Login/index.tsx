import { createContext, ReactNode, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { string } from "yup/lib/locale";

interface LoginProviderProps {
  children: ReactNode;
}
export interface OnSubmitLoginProps {
  email: string;
  password: string;
}
interface iPlaces {
  name: string;
  city: string;
  cep: string;
  district: string;
  foods: string[];
  musics: string[];
  avaliation: string[];
  feedback: string[];
  id: number;
  image: string;
}
type AxiosRes = iPlaces[];
interface ILoginContext {
  onSubmitLogin: (data: OnSubmitLoginProps) => void;
  places: AxiosRes;
  favPlaces: AxiosRes;
}

interface IuserInfo {
  name: string;
  image: string;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([] as AxiosRes);
  const [favPlaces, setFavPlaces] = useState([] as AxiosRes);

  useEffect(() => {
    api.get<AxiosRes>("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  const onSubmitLogin = async (data: OnSubmitLoginProps) => {
    await api
      .post("/login", data)
      .then((res) => {
        const { accessToken } = res.data;
        const { id, image, name } = res.data.user;
        const { favourites } = res.data.user;

        localStorage.setItem("@token", accessToken);
        localStorage.setItem("@idUser", id);

        // console.log(res);
        // console.log(res.data.user.image);

        const userInfo: IuserInfo = { name, image };

        localStorage.setItem("@userInfo", JSON.stringify(userInfo));

        setFavPlaces(favourites);
        navigate("/isLoged");
      })
      .catch((err) => console.log(err));
  };

  return (
    <LoginContext.Provider value={{ onSubmitLogin, places, favPlaces }}>
      {children}
    </LoginContext.Provider>
  );
};
