import React from "react";
import Slider from "../../components/slider";

function MainPage() {
  return (
    <div>
      <h1>Usem (/isLoged) para fazer a rota da dashboar/main page</h1>

      <Slider>
        <li className="keen-slider__slide ">
          1 <button onClick={() => console.log("clikou 1")}>button</button>
        </li>
        <li className="keen-slider__slide ">
          2 <button onClick={() => console.log("clikou 2")}>button</button>
        </li>
        <li className="keen-slider__slide ">
          3 <button onClick={() => console.log("clikou 3")}>button</button>
        </li>
      </Slider>
    </div>
  );
}

export default MainPage;
