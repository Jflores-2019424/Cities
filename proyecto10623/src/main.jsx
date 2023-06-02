import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CitiesRoutes } from './routes/CitiesRoutes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CitiesRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
