import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './assets/root.css'
import AuthProvider from './providers/AuthProvider'
import Routes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </HelmetProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
)
