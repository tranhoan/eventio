import { apiClient } from '../client';
import { Credentials, User } from '../types';

export const login = async ({ email, password }: Credentials) => {
    const response = await apiClient.post<User>('/auth/native', {
        email,
        password,
    });
    return response.data;
};
