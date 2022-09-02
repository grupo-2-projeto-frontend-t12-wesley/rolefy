import api from './api';


export interface IFavPlaces{

}

export interface IGetUserResponse {
	
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


export async function FavPlaces(): Promise<IGetUserResponse> {
    const { data } = await api.patch<IGetUserResponse>(`users/${user.
        id}`);
    return data;
}