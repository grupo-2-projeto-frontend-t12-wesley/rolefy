import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App'
import PlacesProvider from './Context/PlacesContext'
=======
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { LoginProvider } from './context/Login'
>>>>>>> 9c6d4b4c0af2a3b67f470a14b894df78aa0672fc
import './index.css'
import Global from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
   <Global/>
   <PlacesProvider>
      <App />
   </PlacesProvider>
=======
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
>>>>>>> 9c6d4b4c0af2a3b67f470a14b894df78aa0672fc
  </React.StrictMode>

)

   
