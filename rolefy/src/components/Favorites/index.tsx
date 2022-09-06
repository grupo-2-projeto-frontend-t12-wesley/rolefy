import { Children, useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import {
  CardPlaces,
  SuportInsideCard,
  BusinessName,
  FakeStars,
  ContainerCardPlace,
} from "./FavStyle";
import { LoginContext } from "../../context/Login";
import ModalFav from "../LibModal/ModalInfo";
import SendAvaliation from "../ButtonAvaliation";

function ShowFavorites() {
  const { places, favPlaces } = useContext(LoginContext);
  const placesFiltered = places.filter((elem, index, arr) => {
    const indice = arr.findIndex((innerElem) => {
      return elem.id === innerElem.id;
    });

    return index === indice;
  });

  return (
    <ContainerCardPlace>
      {placesFiltered.length > 0 ? (
        placesFiltered.map((placeFiltered) => (
          <CardPlaces key={placeFiltered.id}>
            <figure>
              <img src={placeFiltered.image} alt="bar" />
            </figure>
            <SuportInsideCard>
              <BusinessName>{placeFiltered.name}</BusinessName>
              <FakeStars>
                <Rating
                  name="read-only"
                  value={placeFiltered.avaliation}
                  readOnly
                />
              </FakeStars>
              <ModalFav>
                <SendAvaliation
                  id={placeFiltered.id}
                  star={placeFiltered.avaliation}
                />
              </ModalFav>
            </SuportInsideCard>
          </CardPlaces>
        ))
      ) : (
        <div>nenhum resultado encontrado</div>
      )}
    </ContainerCardPlace>
  );
}

export default ShowFavorites;
