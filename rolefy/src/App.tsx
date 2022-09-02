import { useState } from 'react'
//import './App.css';

//import  from './styles/Global'

import MenuEmpresarial from './components/MenuBusiness'
import ButtonEmpresa from './components/ButtonEmpresa'
import BarraUser from './components/BarraUser'
import Favoritos from './components/Favorites'
import HeartFavorite from './components/ButtonFavorite'

function App() {
  return(
  <>
    <BarraUser/>
    <Favoritos/>
    <HeartFavorite/>

  </>
)
}

export default App