import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/slider";
import { LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";

import { IoChatbubbles } from "react-icons/io5";
import ShowFavorites from "../../components/Favorites";
import MenuBusiness from "../../components/MenuBusiness";
import ButtonBusiness from "../../components/ButtonEmpresa";
function MainPage() {
  const { places } = useContext(LoginContext);

  // console.log(places);

  const navigate = useNavigate();

  const userId = window.localStorage.getItem("@idUser");
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
        <button onClick={() => navigate(`/message`)} className="message">
          <IoChatbubbles />
        </button>
      </nav>
    </Conteiner> 


  /* return (
    
    <>
    <MenuBusiness/>
    <ButtonBusiness />
    </>
  ); */
}

export default MainPage;
