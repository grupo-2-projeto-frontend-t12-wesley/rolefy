import * as React from "react";
import { ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useContext } from "react";
import {
  CardPlaces,
  SuportInsideCard,
  BusinessName,
  FakeStars,
  ContainerCardPlace,
} from "../Favorites/FavStyle";
import Rating from "@mui/material/Rating";
import { Conteiner } from "./styled";
import { LoginContext } from "../../context/Login";

interface IPropsSlider {
  children: ReactNode;
}

export default function Slider({ children }: IPropsSlider) {
  const { places } = useContext(LoginContext);
  const [ref] = useKeenSlider<HTMLUListElement>({
    slides: {
      spacing: 100,
    },
  });

  return (
    <Conteiner>
      <div className="DivConteiner">
        <ul ref={ref} className="keen-slider ulConteiner">
          {children}
        </ul>
      </div>
    </Conteiner>
  );
}
