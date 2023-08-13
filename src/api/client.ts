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
            setAccessToken(response.headers['authorization']);
        }

        if (response.headers['refresh-token']) {
            setRefreshToken(response.headers['refresh-token']);
        }
        return response;
    },
    // TODO type this, also handle error state
    async function (error: AxiosError<{ code: string; message: string }>) {
        const { refreshToken: cachedRefreshToken } = useAuthStore.getState();
        const originalRequest = error.config;
        if (
            error.response?.data.code === 'UNAUTHORIZED' &&
            cachedRefreshToken
        ) {
            await refreshToken(cachedRefreshToken);

            //retrying the request after setting new access token
            const accessToken = useAuthStore.getState().accessToken;
            if (originalRequest) {
                originalRequest.headers.Authorization = accessToken;
            }
            return apiClient(originalRequest as AxiosRequestConfig);
        }
        return Promise.reject(error);
    }
);
