import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { loginResponse, populatedUserResponse } from "../../types/api/responses";

const { VITE_API_URL } = import.meta.env;

export const signin = async (credentials: CredentialResponse): Promise<loginResponse> => {
    //TODO no recibir respuesta o recibir un unhandled error 
    const { data } = await axios.post(`${VITE_API_URL}/api/user/signin`, credentials)
    return data as loginResponse
}

export const getUserData = async (user_id: string): Promise<populatedUserResponse> => {
    //TODO no recibir respuesta o recibir un unhandled error 
    const { data } = await axios.post(`${VITE_API_URL}/api/user?id=${user_id}`)
    return data as populatedUserResponse
}
