import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import PlacesProvider from './Context/PlacesContext'

import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from './context/Login'

import './index.css'
import Global from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)

   



   
