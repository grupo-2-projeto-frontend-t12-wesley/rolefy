import { useContext } from "react";
import { PlacesContext,  } from "../../Context/PlacesContext";
import { IGetPlacesResponse, GetPlaces } from '../../services/GetPlaces'
import ImagePlace from '../../assets/sample1.png'
import { CardPlaces, SuportInsideCard, BusinessName, FakeStars, ContainerCardPlace } from "./FavStyle";



function ShowFavorites() {
    const { places, setPlaces } = useContext(PlacesContext)
return(
    <ContainerCardPlace>
         {
            places.length > 0 ?
            places.map((place) => (
                <CardPlaces key={place.userId}>
                    <figure>
                        <img src={ImagePlace} alt="bar" />
                    </figure>
                    <SuportInsideCard>
                        <BusinessName>{place.name}</BusinessName>
                        <FakeStars>{place.avaliation} Estrelas</FakeStars>
                    </SuportInsideCard>
                </CardPlaces>
            )) : 

            <div>nenhum resultado encontrado</div>
        } 

        {/* <CardPlaces>
            <figure>
                <img src={ImagePlace} alt="bar" />
            </figure>
            <SuportInsideCard>
                <BusinessName>Nome da empresa</BusinessName>
                <FakeStars>&#11088;&#11088;&#11088;&#11088;</FakeStars>
            </SuportInsideCard>
            
        </CardPlaces>
        <CardPlaces>
            <figure>
                <img src={ImagePlace} alt="bar" />
            </figure>
            <SuportInsideCard>
                <BusinessName>Nome da empresa</BusinessName>
                <FakeStars>&#11088;&#11088;&#11088;&#11088;</FakeStars>
            </SuportInsideCard>
            
        </CardPlaces>
        <CardPlaces>
            <figure>
                <img src={ImagePlace} alt="bar" />
            </figure>
            <SuportInsideCard>
                <BusinessName>Nome da empresa</BusinessName>
                <FakeStars>&#11088;&#11088;&#11088;&#11088;</FakeStars>
            </SuportInsideCard>
            
        </CardPlaces>*/}
    </ContainerCardPlace> 
)
}


export default ShowFavorites;