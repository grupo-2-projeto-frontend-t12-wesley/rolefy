 import { useContext } from "react";
import { PlacesContext  } from "../../Context/PlacesContext";
import { IGetPlacesResponse, GetPlaces } from '../../services/GetPlaces'
import ImagePlace from '../../assets/sample1.png'
import { CardPlaces, SuportInsideCard, BusinessName, FakeStars, ContainerCardPlace } from "./FavStyle";



function ShowFavorites() {
    const { places, setPlaces } = useContext(PlacesContext)
return(
    <ContainerCardPlace>
        {/*  {
            places.length > 0 ?
            places.map((place) => (
                <CardPlaces key={place.user.id}>
                    <figure>
                        <img src={ImagePlace} alt="bar" />
                    </figure>
                    <SuportInsideCard>
                        <BusinessName>{place.}</BusinessName>
                        <FakeStars>{place.user.name} Estrelas</FakeStars>
                    </SuportInsideCard>
                </CardPlaces>
            )) : 

            <div>nenhum resultado encontrado</div>
        } */} 

        
    </ContainerCardPlace> 
)
}


export default ShowFavorites; 