import { useEffect, useState } from 'react';
import ImageHeart from '../../assets/svgFiles/Group.svg'
import api from '../../services/api';

export interface IPlace{
    name: string;
    city: string;
    cep: string;
    district: string;
    foods: string[];
    musics: string[];
    avaliation: number;
    userId: number; 
}

interface IGetUserResponse {
	
    accessToken: string;
	user: {
		email: string;
        name: string;
        cep: string;
        musics: string[];
        foods: string[];
        image: string;
        favourites: IPlace[] ;
        id: number;
       
    }
    
} 
interface IFavPlace {
    name: string;
    city: string;
    cep: string;
    district: string;
    foods: string[];
    musics: string[];
    avaliation: number;
    userId: number;
}

function HeartFavorite(){
    const [favPlaces, setFavePlaces] = useState<IPlace[]>([])

    function saveNewPlaces() {
        const newPlace : IPlace[] = {
            /* Pegar o objeto com as informações renderizadas */
        }

        setFavePlaces([...favPlaces, newPlace])
    }

  useEffect(() => {
    async function sendFavPlace(){
        const token = localStorage.getItem('@token');
        const id = localStorage.getItem('@idUser');

        if(token){
            try{
                api.defaults.headers.common.authorization =`Bearer ${token}`;
                await api.patch(`users/${id}`)
            }
        }
    }
  })

    return(
        <div>
            <img src={ImageHeart}/>
        </div>
    )
}

export default HeartFavorite;