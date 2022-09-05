import * as React from "react";
import { ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Conteiner } from "./styled";

interface IPropsSlider {
  children: ReactNode;
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
