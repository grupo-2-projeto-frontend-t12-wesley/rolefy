 import { useContext } from "react";
import { PlacesContext  } from "../../Context/PlacesContext";
//import { IGetPlacesResponse, GetPlaces } from '../../services/GetPlaces'

import ImagePlace from '../../assets/sample1.png'
import { CardPlaces, SuportInsideCard, BusinessName, FakeStars, ContainerCardPlace } from "./FavStyle";
import { LoginProvider, LoginContext,  } from "../../context/Login";
import ModalFav from "../LibModal/ModalInfo";



function ShowFavorites() {
    const { places, favPlaces } = useContext(LoginContext)
   
    const placesFiltered = places.filter((elem, index, arr) => {
        const indice = arr.findIndex((innerElem) => {
            return elem.id === innerElem.id
        })
        return index === indice
    })
   
    const matchId = placesFiltered.filter((elem, i) => elem.id === favPlaces[i].id)
    console.log(matchId)

return(
    <ContainerCardPlace>
        {  
            placesFiltered.length > 0 ?
            placesFiltered.map((placeFiltered) => (
                <CardPlaces key={placeFiltered.id}>
                    <figure>
                        <img src={placeFiltered.image} alt="bar" />
                    </figure>
                    <SuportInsideCard>
                        <BusinessName>{placeFiltered.name}</BusinessName>
                        <ModalFav/>
                        <FakeStars>{placeFiltered.avaliation} Estrelas</FakeStars>
                    </SuportInsideCard>
                </CardPlaces>
            )) : 

            <div>nenhum resultado encontrado</div>
        }  

        
    </ContainerCardPlace> 
)
}


export default ShowFavorites; 