import { useContext } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { GlobalContext } from '../../../infra/context/GlobalContext';
import { GlobalContextType } from '../../../types/context/context';
import { signin } from '../../../infra/microservices/app-api';
import { setCookie } from '../../../utils/cookies';
import { createToast } from 'vercel-toast';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigate = useNavigate();
    const { saveUser, isLoading, changeLoading } = useContext(GlobalContext) as GlobalContextType;

    const googleLoginHandler = async (credentials: CredentialResponse): Promise<void> => {
        changeLoading(true)

        const response = await signin(credentials)
        console.log(response);

        if (!response.error && response.token && response.user) {
            //: saludar
            createToast(response.message, { timeout: 3000, type: 'dark' })
            //: guardar token
            setCookie('token', response.token, 7)
            //: cargar datos en estado global
            saveUser(response.user)
            //: redirigir
            navigate('/app')
        } else {
            createToast(response.message, { type: 'dark', cancel: 'ok' })
        }

        changeLoading(false)
    }

    return (
        <div>
            <h1>LoginScreen</h1>

            <div className='login-container'>
                <GoogleLogin
                    width={"250px"}
                    size={"large"}
                    shape={"pill"}
                    theme={"outline"}
                    text={"continue_with"}
                    onSuccess={googleLoginHandler}
                    onError={() => {
                        //: set loading false 
                        console.log('Login Failed');
                    }}
                />
            </div>
            <h1>{isLoading ? 'iniciando sesión' : ""}</h1>
        </div>
    )
}

export default LoginScreen