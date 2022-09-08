import { Conteiner } from "./styled";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ButtonNav from "../../components/ButtonNav";
import { motion } from "framer-motion";

function MenuConfig() {
  const navigate = useNavigate();

  function limpar() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Conteiner>
        <button className="return" onClick={() => navigate("/isLoged")}>
          <AiOutlineArrowLeft />
        </button>

        <div className="conteinerInfo">
          <button onClick={() => navigate("/empresa")} className="buttonNav">
            <h2 className="nomeDoBtn">Empresas</h2>
          </button>
          <button onClick={() => navigate("/editUser")} className="buttonNav">
            <h2 className="nomeDoBtn">Meu perfil</h2>
          </button>

          <button onClick={() => limpar()} className="buttonNav">
            <h2 className="nomeDoBtn">Sair</h2>
          </button>
        </div>
        <ButtonNav />
      </Conteiner>
    </motion.div>
  );
}

export default MenuConfig;
