import { Conteiner } from "./styled";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ButtonNav from "../../components/ButtonNav";

function MenuConfig() {
  const navigate = useNavigate();

  function limpar() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <Conteiner>
      <button className="return" onClick={() =>  navigate("/isLoged")}>
        <AiOutlineArrowLeft />
      </button>

      <div className="conteinerInfo">
        <button
          onClick={() => navigate("/empresa")}
          className="buttonNav"
        >
          <h2>Empresas</h2>
        </button>
        <button onClick={() => navigate("/editUser")} className="buttonNav">
          <h2>Meu perfil</h2>
        </button>

        <button onClick={() => limpar()}>
          <h2>Sair</h2>
        </button>
      </div>
      <ButtonNav />
    </Conteiner>
  );
}

export default MenuConfig;
