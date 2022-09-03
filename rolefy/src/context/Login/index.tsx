
import { createContext, ReactNode, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { string } from "yup/lib/locale";
import axios from "axios";
import { GetPlaces, IGetPlacesResponse } from "../../services/GetPlaces";


interface LoginProviderProps {
  children: ReactNode;
}

export interface OnSubmitLoginProps {
  email: string;
  password: string;
}

export interface IResponse{
  accessToken: string;
user: {
  email: string;
      name: string;
      cep: string;
      musics: string[];
      foods: string[];
      image: string;
      favourites: string[];
      id: number;
     
  }
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
  
}



export const LoginContext = createContext<ILoginContext>({} as ILoginContext);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([] as AxiosRes);
  
 
  console.log(places);

  useEffect(() => {
    api.get<AxiosRes>("/places").then((response) => {
      setPlaces(response.data);
      
    });
  }, []);

 

  const onSubmitLogin = async (data: OnSubmitLoginProps) => {
    await axios
      .post("https://rolefy.herokuapp.com/login", data)
      .then((response) => {
        
        const { favourites } = response.data.user
        const { accessToken } = response.data;
        const { id } = response.data.user;
        
        
        
        localStorage.setItem("@token", accessToken);
        localStorage.setItem("@idUser", id);
        
        navigate("/isLoged");
      })
      .catch((err) => console.log(err));}


        useEffect( () => {


          async function getFavourites(){
            const token = localStorage.getItem("@token");
            const id = localStorage.getItem("@idUser");

            if(token){
              try{
                await api.get<AxiosRes>(`/users/${id}`).then(response => {
                  console.log(response.data)
                }).catch(error =>{
                  console.log(error)
                })
              }catch(error){
                console.error(error)

            }
            }
          }
          getFavourites()
        
        }, [])

      
  
  return (
    <LoginContext.Provider value={{ onSubmitLogin, places }}>
      {children}
    </LoginContext.Provider>
  );
};
