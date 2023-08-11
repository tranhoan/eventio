import { useMutation } from 'react-query';
import { login } from '../../../api/services/auth';
import { AxiosError } from 'axios';
import { Credentials, User } from '../../../api/types';

interface LoginError {
    message: string;
    code: string;
}

export const useLogin = () => {
    return useMutation<User, AxiosError<LoginError>, Credentials, unknown>({
        mutationKey: ['loginKey'],
        mutationFn: login,
        onSuccess: (data) => {
            console.log(data);
        },
    });
};
