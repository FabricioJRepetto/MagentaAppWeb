import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { loginResponse, populatedUserResponse } from "../../types/api/responses";
import { getCookie } from "../../utils/cookies";
import getErrorMessage from "../../utils/getErrorMessage";

const { VITE_API_URL } = import.meta.env;

const headers = {
    headers: {
        Authorization: getCookie('userToken')
    }
}

export const signin = async (credentials: CredentialResponse): Promise<loginResponse | null> => {
    try {
        //TODO no recibir respuesta o recibir un unhandled error 
        const { data } = await axios.post(`${VITE_API_URL}/api/user/signin`, credentials)
        return data as loginResponse

    } catch (error) {
        getErrorMessage(error)
        return null
    }
}

export const getUserData = async (user_id: string): Promise<populatedUserResponse | null> => {
    try {
        //TODO no recibir respuesta o recibir un unhandled error 
        const { data } = await axios(`${VITE_API_URL}/api/user?id=${user_id}`, headers)
        return data as populatedUserResponse

    } catch (error) {
        getErrorMessage(error)
        return null
    }
}