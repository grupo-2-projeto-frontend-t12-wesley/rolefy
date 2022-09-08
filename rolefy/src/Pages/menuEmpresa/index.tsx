import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ButtonBusiness from "../../components/ButtonEmpresa";
import MenuBusiness from "../../components/MenuBusiness";

import CompanyRegistration from "../../components/CompanyRegistration";

function MenuEmpresa() {
  const navigate = useNavigate();

  const comapny = localStorage.getItem("@idBusiness");



  return (
    <>
      <button onClick={() => navigate("/configPage")}>
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
    </>
  );
}

export default MenuEmpresa;
