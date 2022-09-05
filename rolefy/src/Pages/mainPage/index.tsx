
import React, { useContext } from "react";
import ButtonBusiness from "../../components/ButtonEmpresa";
import ShowFavorites from "../../components/Favorites";
import ModalFav from "../../components/LibModal/ModalInfo";
import MenuBusiness from "../../components/MenuBusiness";
import { LoginContext } from "../../context/Login";

function MainPage() {
  return (
    <div>
      <h1>Usem (/isLoged) para fazer a rota da dashboar/main page</h1>
    {/*   <ShowFavorites />
      <ModalFav/> */}
      <MenuBusiness />
      <ButtonBusiness />
    </div>
  );

}

export default MainPage;
