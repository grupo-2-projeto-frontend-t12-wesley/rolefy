import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ButtonBusiness from "../../components/ButtonEmpresa";
import MenuBusiness from "../../components/MenuBusiness";

import CompanyRegistration from "../../components/CompanyRegistration";
import { Conteiner } from "./style";

function MenuEmpresa() {
  const navigate = useNavigate();

  const comapny = localStorage.getItem("@idBusiness");

  return (
    <Conteiner>
      <button onClick={() => navigate("/configPage")} className="return">
        <AiOutlineArrowLeft />
      </button>

      {comapny == "undefined" ? (
        <CompanyRegistration />
      ) : (
        <div>
          <MenuBusiness />
          <ButtonBusiness />
        </div>
      )}
    </Conteiner>
  );
}

export default MenuEmpresa;
