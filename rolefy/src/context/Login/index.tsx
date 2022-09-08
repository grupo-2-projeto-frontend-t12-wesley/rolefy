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
export interface iPlaces {
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
  imagePlace: AxiosRes; 
  infoPlace: AxiosRes; 
  setFavPlaces: React.Dispatch<React.SetStateAction<AxiosRes>> 
  setImagePlace: React.Dispatch<React.SetStateAction<AxiosRes>> 
  setInfoPlace: React.Dispatch<React.SetStateAction<AxiosRes>> 
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
  const [imagePlace, setImagePlace] = useState([] as AxiosRes);
  const [ infoPlace, setInfoPlace] = useState([] as AxiosRes);
  
  const idUser = localStorage.getItem('@idUser')
  const idBusiness = localStorage.getItem('@idBusiness')

  
  useEffect(() => {
    api.get<AxiosRes>("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<AxiosRes>(`/places/${idUser}`)
      .then((response) => {
        setUserPlace(response.data);
      })
      .catch((err) => console.log());
  }, []);

  const token = localStorage.getItem("@token");
  api.defaults.headers.common.Authorization = `Bearer ${token}`;


  const onSubmitLogin = async (data: OnSubmitLoginProps) => {
    await api
      .post("/login", data)
      .then((res) => {
        const { accessToken } = res.data;
        const { id, image, name, companyId, favourites } = res.data.user;
        
        localStorage.setItem("@token", accessToken);

        localStorage.setItem("@idUser", id)
        localStorage.setItem("@idBusiness", companyId)

        const userInfo: IuserInfo = { name, image };

        localStorage.setItem("@userInfo", JSON.stringify(userInfo));

        setFavPlaces(favourites);

        toast.success("Sucesso!!!");
        navigate("/isLoged");
      })
      .catch((err) => toast.error("Erro!!!"));
  };

  
  const loadUserInfo = async () => {
    await api
    .get(`/users/${idUser}`)
      .then((res) => {
       console.log(res)
        const  { favourites, companyId }  = res.data;
        console.log(companyId)
       
        setFavPlaces(favourites);
        
        
      })
      .catch((err) =>  toast.error("Erro!!!"));
    };
    
    const loadPlaceInfo = async () => {
      await api
      .get(`/places/${idBusiness}`)
        .then((res) => {
          const  { image, description }  = res.data;
          console.log(image, description)
          
          setImagePlace(image);
          setInfoPlace(description);
          
          
        })
        .catch((err) =>  toast.error("Erro!!!"));
      }; 
    
    useEffect(() => {
     api.get<AxiosRes>("/places").then((response) => {
       setPlaces(response.data);
     });
  
     loadUserInfo()
     loadPlaceInfo()
   }, []);


  return (

    <LoginContext.Provider value={{ onSubmitLogin, places, favPlaces, setFavPlaces, imagePlace, setImagePlace, infoPlace, setInfoPlace }}>

      {children}
    </LoginContext.Provider>
  );
};
