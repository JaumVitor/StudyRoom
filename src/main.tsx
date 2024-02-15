import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import MainPage from './pages/mainPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
