import axios from 'axios';
import {getToken, setToken, removeToken, getRefreshToken, removeRefreshToken, removeAuth} from './auth';
const API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const EXCLUDED_ENDPOINTS = [
    '/api/v1/auth/login',
    '/api/v1/auth/register',
    '/api/v1/auth/otp',
    '/api/v1/auth/verify-account',
    '/api/v1/auth/regenerate-otp',
    '/api/v1/auth/forgot-password/check-mail',
    '/auth/url/v2',
    '/auth/callback/v2',
];

api.interceptors.request.use(
    (config) => {
        if (!EXCLUDED_ENDPOINTS.includes(config.url)) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry &&
            !EXCLUDED_ENDPOINTS.includes(originalRequest.url)
        ) {
            originalRequest._retry = true;
            const refreshToken = getRefreshToken();
            try {
                const response = await axios.post(`${API_URL}/auth/refresh-token`, {refreshToken});
                const {accessToken} = response.data;
                setToken(accessToken);
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                removeAuth();
                removeToken();
                removeRefreshToken();
                window.location.href = '/auth/login';
                return Promise.reject(refreshError);
            }
        }
        if (error.response && error.response.status === 404) {
            console.error("Resource not found");
        }

        console.error("Error status code:", error.response.status);
        console.error("Error details:", error.response.data);

        return Promise.reject(error);
    }
);

const get = (url, config = {}) => api.get(url, config).then(res => res.data);
const post = (url, data, config = {}) => api.post(url, data, config).then(res => res.data);
const put = (url, data, config = {}) => api.put(url, data, config).then(res => res.data);
const del = (url, config = {}) => api.delete(url, config).then(res => res.data);
const uploadImage = (url, formData, config = {}) => api.post(url, formData, {
    ...config,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
}).then(res => res.data);

export {get, post, put, del, uploadImage, api};