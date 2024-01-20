import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseProvider from './ContextCards/CardsContext.jsx'
import MacrameProvider from '../src/ContextCards/ContextTallerMacrame.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MacrameProvider>
    <UseProvider>
    <App />
    </UseProvider>
    </MacrameProvider>
   
  </React.StrictMode>,
)
