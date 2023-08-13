import { apiClient } from '../client';
import { Credentials, User } from '../types';

export const login = async ({ email, password }: Credentials) => {
    const response = await apiClient.post<User>('/auth/native', {
        email,
        password,
    });
    return response.data;
};

export const refreshToken = async (oldToken: string) => {
    const response = await apiClient.post<string>('/auth/refresh-token', {
        refreshToken: oldToken,
    });
    return response.data;
};
