import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

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
  userPlace: AxiosRes;
  userData: iPlaces;
}

export interface IuserInfo {
  name: string;
  image: string;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([] as AxiosRes);
  const [favPlaces, setFavPlaces] = useState([] as AxiosRes);
  const [userPlace, setUserPlace] = useState([] as AxiosRes);

  const [userData, SetUserData] = useState({} as iPlaces);

  const idUser = localStorage.getItem("@idUser");

  useEffect(() => {
    api.get<AxiosRes>("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<AxiosRes>(`/places/${idUser}`).then((response) => {
      setUserPlace(response.data);
    });

    api.get<iPlaces>(`/users/${idUser}`).then((response) => {
      SetUserData(response.data);
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

        const userInfo: IuserInfo = { name, image };

        localStorage.setItem("@userInfo", JSON.stringify(userInfo));

        setFavPlaces(favourites);

        toast.success("Sucesso!!!");
        navigate("/isLoged");
      })
      .catch((err) => toast.error("Erro!!!"));
  };

  return (
    <LoginContext.Provider
      value={{ onSubmitLogin, places, favPlaces, userPlace, userData }}
    >
      {children}
    </LoginContext.Provider>
  );
};
