import { useContext } from 'react';
import { LoginContext, iPlaces } from '../../context/Login';
import { Header } from './MenuBusinessStyle'

function MenuBusiness() {
    const { namePlace, imagePlace } = useContext(LoginContext);

    return(
        <Header>
            <figure>
                <img src={imagePlace : iPlaces} alt="Logo" />
            </figure>
               
            <h2>{namePlace : iPlaces}</h2>
        </Header>
    )
}


export default MenuBusiness;