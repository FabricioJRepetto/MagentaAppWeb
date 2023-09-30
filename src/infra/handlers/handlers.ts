import { CredentialResponse } from "@react-oauth/google"
import { signin } from "../microservices/app-api"
import { setCookie } from "../../utils/cookies";

export const googleLoginHandler = async (credentials: CredentialResponse): Promise<void> => {
    const response = await signin(credentials)
    console.log(response);

    if (!response.error) {
        //: guardar token
        setCookie('token', response.token!, 7)
        //: cargar datos en estado global
        //: 
    }
}