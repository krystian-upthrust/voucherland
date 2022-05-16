import axios, {AxiosInstance} from 'axios';
import { LocalStorageService } from "../LocalStorageService";

export const AuthUser: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
});

export const AuthApi: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : "Bearer " + LocalStorageService.getAccessToken()
    }
});

