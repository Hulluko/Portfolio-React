import React from 'react'
import ReactDOM from 'react-dom/client'
// Tuodaan pääkomponentti
import App from './App.jsx'
// Tuodaan tyylit
import './index.css'

// Yhdistää HTML ja reactin
ReactDOM.createRoot(document.getElementById('root')).render(
  // Havaitsee virheet kehitysvaiheessa
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
