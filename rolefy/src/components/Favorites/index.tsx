import { useContext } from "react";


import ImagePlace from "../../assets/sample1.png";
import {
  CardPlaces,
  SuportInsideCard,
  BusinessName,
  FakeStars,
  ContainerCardPlace,
} from "./FavStyle";
import { LoginProvider, LoginContext } from "../../context/Login";

function ShowFavorites() {
  const { places, favPlaces } = useContext(LoginContext);

  /*  const placesFiltered = favPlaces.filter((elem, index, arr) => {
    const indice = arr.findIndex((innerElem) => {
      return elem.id === innerElem.id;
    });
    return index === indice;
  });  */

  return (
    <ContainerCardPlace>
      {favPlaces.length > 0 ? (
        favPlaces.map((placeFiltered) => (
          <CardPlaces key={placeFiltered.id}>
            <figure>
              <img src={placeFiltered.image} alt="bar" />
            </figure>
            <SuportInsideCard>
              <BusinessName>{placeFiltered.name}</BusinessName>
              <FakeStars>{placeFiltered.avaliation} Estrelas</FakeStars>
            </SuportInsideCard>
          </CardPlaces>
        ))
      ) : (
        <div><h2>Nenhum resultado encontrado</h2></div>
      )}
    </ContainerCardPlace>
  );
}

export default ShowFavorites;
