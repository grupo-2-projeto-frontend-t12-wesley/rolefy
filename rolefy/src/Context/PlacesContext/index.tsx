import { createContext, useEffect, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
import api from '../../services/api';
import { IGetPlacesResponse, GetPlaces } from '../../services/GetPlaces'

 interface IPlaceProps{
    children: ReactNode;
}

export interface IPlace{
    accessToken: string;
	user: {
		email: string;
        name: string;
        cep: string;
        musics: string[];
        foods: string[];
        image: string;
        favourites: string[];
        id: number;
       
    }
}


 
export interface IPlaceContext{
    places: IPlace[] | IGetPlacesResponse[];
    setPlaces: React.Dispatch<React.SetStateAction<IGetPlacesResponse[]>>;
   
      
}; 

 export const PlacesContext = createContext<IPlaceContext>({} as IPlaceContext); 

function PlacesProvider({children} : IPlaceProps) {

    const [places, setPlaces] = useState<IGetPlacesResponse[]>([]);

    useEffect(() => {
        GetPlaces()
        .then((response : IGetPlacesResponse) => {
            console.log(response.user.favourites)
            setPlaces([...places, response])
            
        })
        .catch((error) => {
            
            console.error(error)})
    }, [])

   /*  function saveFavPlace(data: IGetPlacesResponse) {
        if(!data.accessToken) return

        const newFavPlace = {
            
        }
    } */


    return(
     <PlacesContext.Provider value={{ places, setPlaces,  }} >
        {children}
     </PlacesContext.Provider>   
    )

}

export default PlacesProvider; 