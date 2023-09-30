import { GoogleLogin } from '@react-oauth/google';

const LoginScreen = () => {
    return (
        <div>
            <h1>LoginScreen</h1>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default LoginScreen