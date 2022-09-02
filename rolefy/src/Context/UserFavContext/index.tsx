import { createContext, useEffect, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
//import api from '../../services/api';


interface IUserProps{
    children: ReactNode;
}





export interface IUser{
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