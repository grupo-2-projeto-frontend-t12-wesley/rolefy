import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PlacesProvider from './Context/PlacesContext'
import './index.css'
import Global from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Global/>
   <PlacesProvider>
      <App />
   </PlacesProvider>
  </React.StrictMode>

)

   
