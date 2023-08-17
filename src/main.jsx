import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from "./styledGlobal/styledGlobal.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
