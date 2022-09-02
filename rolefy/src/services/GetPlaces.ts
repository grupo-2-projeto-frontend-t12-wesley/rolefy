import api from './api';


export interface IGetPlaces{

}


export interface IGetPlacesResponse {
    name: string;
    city: string;
    cep: string;
    district: string;
    foods: string[];
    musics: string[];
    avaliation: number;
    userId: number; 
}


export async function GetPlaces(): Promise<IGetPlacesResponse> {
    const { data } = await api.get<IGetPlacesResponse>('places');
    return data;
}