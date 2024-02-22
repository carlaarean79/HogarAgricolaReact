import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseProvider from './ContextCards/CardsContext.jsx'
import TutorialProvider from '../src/ContextCards/TutorialesContext.jsx'
import { UsersContextProvider } from './ContextCards/UsersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersContextProvider>
    <TutorialProvider>
    <UseProvider>
    <App />
    </UseProvider>
    </TutorialProvider>
    </UsersContextProvider>
   
  </React.StrictMode>,
)
