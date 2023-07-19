import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CarritoProvider from './context/contextCarrito'
import AuthProvider from './auth/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthProvider>
      <CarritoProvider>
        <App/>
      </CarritoProvider>
    </AuthProvider>

  // </React.StrictMode>
)