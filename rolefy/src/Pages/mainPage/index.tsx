import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/slider";
import { LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";

import { IoChatbubbles } from "react-icons/io5";
function MainPage() {
  const { places } = useContext(LoginContext);

  // console.log(places);

  const navigate = useNavigate();

  const userId = window.localStorage.getItem("@idUser");

  return (
    <Conteiner>
      <Slider>
        {places.map((resp, index) => (
          <li className="keen-slider__slide " key={index}>
            <h1>{resp.name}</h1>
            <img src={resp.image} />
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
  );
}

export default MainPage;
