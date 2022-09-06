import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/slider";
import { LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";
import ButtonNav from "../../components/ButtonNav";
function MainPage() {
  const { places } = useContext(LoginContext);
  const navigate = useNavigate();

  const userId = window.localStorage.getItem("@idUser");

  return (
    <Conteiner>
      <Slider>
        {places.map((resp, index) => (
          <li className="keen-slider__slide " key={index}>
            <h1>{resp.name}</h1>
            <button onClick={() => navigate(`/chat/${resp.id}`)}>Chat</button>
          </li>
        ))}
      </Slider>

      <nav>
        <button onClick={() => navigate(`/message`)} className="message"></button>
        <ButtonNav />
      </nav>
    </Conteiner>
  );
}

export default MainPage;
