import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ButtonBusiness from "../../components/ButtonEmpresa";
import MenuBusiness from "../../components/MenuBusiness";

function MenuEmpresa() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/configPage")}><AiOutlineArrowLeft /></button>
      <div>
        <MenuBusiness />
        <ButtonBusiness />
      </div>
    </>
  );
}

export default MenuEmpresa;
