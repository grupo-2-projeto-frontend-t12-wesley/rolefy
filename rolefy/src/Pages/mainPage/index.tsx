import { useContext } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import Slider from "../../components/slider";
import { iPlaces, LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";
import ButtonNav from "../../components/ButtonNav";
import HeartFavorite from "../../components/ButtonFavorite";
import toast from "react-hot-toast";
import api from "../../services/api";

import { GrFavorite } from "react-icons/gr";

interface IPlaceInfo {
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

function MainPage() {
  const { places, favPlaces, setFavPlaces } = useContext(LoginContext);
  const navigate = useNavigate();

  const userId = window.localStorage.getItem("@idUser");
  
  /* const GetFavs = async () => {
    await api
      .get(`/users/${userId}`)
      .then((res) => {
       console.log(res)
        const  favourites  = res.data.favourites;
        
        
        setFavPlaces(favourites);
        
      })
      .catch((err) =>  toast.error("Erro!!!"));
  }; */

  /* function saveNewFav(data: IPlaceInfo) {
    GetFavs();
    if (!data) return;

    console.log(favPlaces);
    // const newFav : IPlaceInfo = {
    //   name: name,
    //   city: city,
    //   cep: cep,
    //   district: district,
    //   foods: foods,
    //   musics: musics,
    //   avaliation: avaliation,
    //   feedback: feedback,
    //   id: id,
    //   image: image

    // }

    setFavPlaces([...favPlaces, data]);
    PatchRequest(data);
  } */

  async function PatchRequest(data : iPlaces) {
    const favourites = {
     // favourites: favPlaces,

    favourites: [...favPlaces, data],
    };
    console.log(favPlaces)
    await api
      .patch(`users/${userId}`, favourites)
      .then((response) => {
        console.log(response)
        setFavPlaces(response.data.favourites)
        localStorage.setItem(
          "@FavPlaces",
          JSON.stringify(response.data.favourites)
        );
        toast.success("Estabelecimento adicionado aos favoritos.");
      })
      .catch((error) => {
        console.log(error);
      });
  }




  
  
  return (
    <Conteiner>
      <Slider>
        {places.map((resp, index) => (
          <li className="keen-slider__slide " key={index}>
            <h1>{resp.name}</h1>
            <button onClick={() => navigate(`/chat/${resp.id}`)}>Chat</button>

            {/* <HeartFavorite resp={resp} /> */}

            <div>
              <button onClick={() => PatchRequest(resp)}>
                <GrFavorite />{" "}
              </button>
            </div>
          </li>
        ))}
      </Slider>

      <nav>
        <ButtonNav />
      </nav>
    </Conteiner>
  );
}

export default MainPage;
