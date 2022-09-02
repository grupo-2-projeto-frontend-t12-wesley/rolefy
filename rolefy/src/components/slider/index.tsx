import * as React from "react";
import { ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Conteiner } from "./styled";

interface IPropsSlider {
  children: ReactNode;
  // <li className="keen-slider__slide "> Conteudo do li </li>
}

export default function Slider({ children }: IPropsSlider) {
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
