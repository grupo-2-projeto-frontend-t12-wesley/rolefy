import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/slider";
import { LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";
import ButtonNav from "../../components/ButtonNav";
function MainPage() {
  const { places } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <Conteiner>
      <Slider>
        {places.map((resp, index) => (
          <li className="keen-slider__slide" key={index}>
            <img
              src={resp.image}
              alt="foto do restaurante"
              className="fotoDoRestaurante"
            />
            <div className="dadosDoRestaurante">
              <h1 className="nomeDoRestaurante">{resp.name}</h1>
              <button onClick={() => navigate(`/chat/${resp.id}`)}>Chat</button>
            </div>
          </li>
        ))}
      </Slider>

      <nav>
        <button
          onClick={() => navigate(`/message`)}
          className="message"
        ></button>
        <ButtonNav />
      </nav>
    </Conteiner>
  );
}

export default MainPage;
