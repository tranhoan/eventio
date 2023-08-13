import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import { refreshToken } from './services/auth';

const URL =
    'https://eventio-testproject-eieqpn2nu-strvcom.vercel.app/api/rest/v1';

const API_KEY = '9c7c5024-605b-4224-829d-da9ea9c9600c';

export const apiClient = axios.create({
    baseURL: URL,
    headers: {
        'Content-type': 'application/json',
        APIkey: API_KEY,
    },
});

apiClient.interceptors.request.use(function (config) {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
        config.headers.Authorization = accessToken;
    }
    return config;
});

apiClient.interceptors.response.use(
    function (response) {
        const { setAccessToken, setRefreshToken } = useAuthStore.getState();

        if (response.headers['authorization']) {
            console.log('new access token', response.headers['authorization']);
            setAccessToken(response.headers['authorization']);
        }

        if (response.headers['refresh-token']) {
            setRefreshToken(response.headers['refresh-token']);
        }
        return response;
    },
    async function (error: AxiosError<{ code: string; message: string }>) {
        const { refreshToken: cachedRefreshToken, accessToken } =
            useAuthStore.getState();

        if (
            error.response?.data.code === 'UNAUTHORIZED' &&
            cachedRefreshToken
        ) {
            await refreshToken(cachedRefreshToken);
            axios.defaults.headers.common['Authorization'] = accessToken;
            return axios(error.config as AxiosRequestConfig);
        }
        return Promise.reject(error);
    }
);
