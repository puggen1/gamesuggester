import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import User from './context/User'
import Modal from './context/Modal'
import Games from './context/games'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Games>
    <Modal>
    <User>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </User>
    </Modal>
    </Games>
  </React.StrictMode>,
)
