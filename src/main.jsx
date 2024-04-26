import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  * Disabled StrictMode as it makes the components render twice in development env
  */

  // <React.StrictMode>
    <App />,
  {/* </React.StrictMode>, */}
)
