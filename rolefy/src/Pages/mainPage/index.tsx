
import React, { useContext } from "react";
import ShowFavorites from "../../components/Favorites";
import { LoginContext } from "../../context/Login";

function MainPage() {
  return (
    <div>
      <h1>Usem (/isLoged) para fazer a rota da dashboar/main page</h1>
      <ShowFavorites />
    </div>
  );

}

export default MainPage;
