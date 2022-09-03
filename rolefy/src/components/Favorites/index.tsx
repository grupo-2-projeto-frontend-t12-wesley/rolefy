 import { useContext } from "react";
import { PlacesContext  } from "../../Context/PlacesContext";
//import { IGetPlacesResponse, GetPlaces } from '../../services/GetPlaces'

import ImagePlace from '../../assets/sample1.png'
import { CardPlaces, SuportInsideCard, BusinessName, FakeStars, ContainerCardPlace } from "./FavStyle";
import { LoginProvider, LoginContext,  } from "../../context/Login";



function ShowFavorites() {
    const { places } = useContext(LoginContext)
   
    

return(
    <ContainerCardPlace>
        {  
            places.length > 0 ?
            places.map((place) => (
                <CardPlaces key={place.id}>
                    <figure>
                        <img src={place.image} alt="bar" />
                    </figure>
                    <SuportInsideCard>
                        <BusinessName>{place.name}</BusinessName>
                        <FakeStars>{place.avaliation} Estrelas</FakeStars>
                    </SuportInsideCard>
                </CardPlaces>
            )) : 

            <div>nenhum resultado encontrado</div>
        }  

        
    </ContainerCardPlace> 
)
}


export default ShowFavorites; 