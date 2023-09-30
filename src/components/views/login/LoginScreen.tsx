import { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { googleLoginHandler } from '../../../infra/handlers/handlers';
import { GlobalContext } from '../../../infra/context/GlobalContext';

const LoginScreen = () => {
    const { } = useContext(GlobalContext) as GlobalContextType;

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
        </div>
    )
}

export default LoginScreen