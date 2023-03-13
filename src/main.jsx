import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import User from './context/User'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </User>
  </React.StrictMode>,
)
