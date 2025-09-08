import api from "../api/api"
import type { IUser } from "../types/IUser";


export default class RegisterService {
    static async postRegisterUser(userData:IUser): Promise<IUser> {
        try {
            const response = await api.post("/users", userData);
            return response.data; 
        } catch (error: any) {
            console.error("Erro ao registrar usuario", error.response?.data ||  error.message);
            throw error;
        }
    } 
}