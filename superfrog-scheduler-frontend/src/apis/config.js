import axios from "axios";
import cacheUtils from "@/utils/cacheUtils.js";

const api = axios.create();

api.interceptors.request.use(
    (config) => {
        // add the base URL to the request
        //config.baseURL = 'https://superfrogscheduler.up.railway.app/api/v1';
         config.baseURL = 'http://localhost:8080/api/v1'

        const token = cacheUtils.get('login_token')?.token;

        console.log(token);

        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        // add the authorization header to the request
        return config;
    },
    (error) => {
        // handle the request error
        const response = error?.response?.data; // use optional chaining to access error response data
        return Promise.reject(response || error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response?.data; // use optional chaining to access response data
    },
    (error) => {
        const response = error?.response?.data; // use optional chaining to access error response data
        return Promise.reject(response || error);
    }
);

export default api;
