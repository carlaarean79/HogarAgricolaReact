import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseProvider from './ContextCards/CardsContext.jsx'
import MacrameProvider from '../src/ContextCards/ContextTallerMacrame.jsx'
import { UsersContextProvider } from './ContextCards/UsersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersContextProvider>
    <MacrameProvider>
    <UseProvider>
    <App />
    </UseProvider>
    </MacrameProvider>
    </UsersContextProvider>
   
  </React.StrictMode>,
)
