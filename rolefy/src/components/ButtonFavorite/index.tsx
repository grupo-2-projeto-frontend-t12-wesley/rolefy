import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ImageHeart from "../../assets/svgFiles/Group.svg";
import { iPlaces, LoginContext } from "../../context/Login";
import api from "../../services/api";

interface IPlaceInfo{
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
function HeartFavorite({name, city, cep, district, foods, musics, avaliation, feedback, id, image} : iPlaces) {
  const {  favPlaces, setFavPlaces } = useContext(LoginContext);
  

  function saveNewFav(data : iPlaces){
    if(!data) return;

   
    const newFav : iPlaces = {
      name: name,
      city: city,
      cep: cep,
      district: district, 
      foods: foods,
      musics: musics,
      avaliation: avaliation,
      feedback: feedback,
      id: id,
      image: image 

    }
    
    
    setFavPlaces([...favPlaces, newFav])
  
  }
  

  async function  PatchRequest(){
    const idUser = localStorage.getItem('@idUser')
    const favourites = {
      favourites: favPlaces
    }
      await api.patch(`users/${idUser}`, favourites).then((response) => {
        response
        toast.success('Estabelecimento adicionado aos favoritos.')
      }).catch((error) => {
        console.log(error)
       
      })
  }
  
  return (
    <div>
      <img src={ImageHeart} />
    </div>
  );
}

export default HeartFavorite;
