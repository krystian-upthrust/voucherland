import axios, {AxiosInstance} from 'axios';
import { LocalStorageService } from "../LocalStorageService";

export const AuthUser: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
});

export const instance: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
});

// Add a request interceptor
instance.interceptors.request.use(
    config => {
        const token = LocalStorageService.getAccessToken();
        if (token) {
            instance.defaults.headers.common['Authorization'] = "Bearer " + token;
        }

        return config;
    },
    error => {
        Promise.reject(error);
    });
