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
import { BsFillChatRightFill } from "react-icons/bs";
import { motion } from "framer-motion";


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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Conteiner>
        <Slider>
          {places.map((resp, index) => (
            <li className="keen-slider__slide " key={index}>
              <img src={resp.image} alt="" className="fotoDoRestaurante" />
              <div className="dadosDoRestaurante">
                <h1 className="nomeDoRestaurante">{resp.name}</h1>
                <button
                  onClick={() => navigate(`/chat/${resp.userId}`)}
                  className="chatButton"
                >
                  <BsFillChatRightFill />
                </button>
              </div>

              <div>
                <button
                  onClick={(evento) => {
                    PatchRequest(resp);
                  }}
                  className="favorite"
                >
                  <GrFavorite className="adcFav" />
                </button>
              </div>
            </li>
          ))}
        </Slider>
        <nav>
          <ButtonNav />
        </nav>
      </Conteiner>
    </motion.div>
  );
}

export default MainPage;