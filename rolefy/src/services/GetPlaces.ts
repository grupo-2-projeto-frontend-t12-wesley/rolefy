 import api from './api';


export interface IGetPlaces{

}


export interface IGetPlacesResponse {
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

 export async function GetPlaces(): Promise<IGetPlacesResponse> {
    const token = localStorage.getItem("@token")
    const id = localStorage.getItem('@idUser')
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const { data } = await api.get<IGetPlacesResponse>(`users/${id}`);
    return data;
} 