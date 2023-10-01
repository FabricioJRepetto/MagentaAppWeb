import { useContext } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { GlobalContext } from '../../../infra/context/GlobalContext';
import { GlobalContextType, User } from '../../../types/context/context';
import { signin } from '../../../infra/microservices/app-api';
import { setCookie } from '../../../utils/cookies';
import { createToast } from 'vercel-toast';
import { useNavigate } from 'react-router-dom';
import { loginResponse } from '../../../types/api/responses';

const LoginScreen = () => {
    const navigate = useNavigate();
    const { saveUser, saveConfig, saveLogs, isLoading, changeLoading } = useContext(GlobalContext) as GlobalContextType;

    const googleLoginHandler = async (credentials: CredentialResponse): Promise<void> => {
        changeLoading(true)

        const res: loginResponse = await signin(credentials)
        console.log(res);

        if (res.token && res.user && res.logs && res.config) {
            //: saludar
            createToast(res.message, { timeout: 3000, type: 'dark' })
            //: guardar token
            setCookie('token', res.token, 7)
            //: cargar datos en estado global
            saveUser((res.user as User))
            saveConfig(res.config)
            saveLogs(res.logs)
            //: redirigir
            navigate('/app')
        } else {
            createToast(res.message, { type: 'dark', cancel: 'ok' })
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