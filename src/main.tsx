import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ContextProvider from './infra/context/GlobalContext.tsx';
import './index.css'
import './style/vercel-toast.css' // estilo de notificaciones modificado
import './style/Calendar.css' //TODO estilo de calendario modificado 

const { VITE_CLIENT_ID } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={VITE_CLIENT_ID}>
        <BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>
    </GoogleOAuthProvider>
)
