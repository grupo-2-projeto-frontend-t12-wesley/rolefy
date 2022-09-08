import { useContext } from "react";
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
function HeartFavorite({name, city, cep, district, foods, musics, avaliation, feedback, id, image} : IPlaceInfo) {
  const {  favPlaces, setFavPlaces } = useContext(LoginContext);
  const idUser = localStorage.getItem('@idUser')

  

  // function saveNewFav(data : iPlaces){
  //   if(!data) return;

   
  //   const newFav = {
  //     name: name,
  //     city: city,
  //     cep: cep,
  //     district: district, 
  //     foods: foods,
  //     musics: musics,
  //     avaliation: avaliation,
  //     feedback: feedback,
  //     id: id,
  //     image: image 
  //   }
    
  //   PatchRequest()
  //   setFavPlaces([...favPlaces, newFav])
  
  // }
  

  async function  PatchRequest(){
    
    const favourites = {
      favourites: favPlaces
    }
      await api.patch(`users/${idUser}`, favourites).then((response) => {
        setFavPlaces([...favPlaces, response.data.favourites])
        localStorage.setItem('@FavPlaces', JSON.stringify(response.data.favourites));
        toast.success('Estabelecimento adicionado aos favoritos.')
      }).catch((error) => {
        console.log(error) 
       
      })
  }
  
  return (
    <div>
      <button><img src={ImageHeart} /></button>
    </div>
  );
}

export default HeartFavorite;
