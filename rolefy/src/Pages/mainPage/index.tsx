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
  description: string;
  cep: string;
  city: string;
  image: string[];
  userId: string;
}

function MainPage() {
  const { places, favPlaces, setFavPlaces } = useContext(LoginContext);
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("@idUser");
  async function PatchRequest(data: iPlaces) {
    const favourites = {
      favourites: [...favPlaces, data],
    };
    console.log(favPlaces);
    await api
      .patch(`users/${userId}`, favourites)
      .then((response) => {
        console.log(response);
        setFavPlaces(response.data.favourites);
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
            <img src={resp.image} alt="" className="fotoDoRestaurante" />
            <div className="dadosDoRestaurante">
              <h1 className="nomeDoRestaurante">{resp.name}</h1>
              <button onClick={() => navigate(`/chat/${resp.userId}`)}>
                Chat
              </button>
            </div>

            <div>
              <button onClick={() => PatchRequest(resp)}>
                <GrFavorite className="adcFav"/>
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
