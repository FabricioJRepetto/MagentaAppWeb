import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import './vercel-toast.css' // modificado

const { VITE_CLIENT_ID } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={VITE_CLIENT_ID}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </GoogleOAuthProvider>
)
