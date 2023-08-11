import { useMutation } from 'react-query';
import { login } from '../../../api/services/auth';
import { AxiosError } from 'axios';
import { Credentials, User } from '../../../api/types';
import { useUserStore } from '../../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

interface LoginError {
    message: string;
    code: string;
}

export const useLogin = () => {
    const { setUser } = useUserStore();
    const navigate = useNavigate();

    return useMutation<User, AxiosError<LoginError>, Credentials, unknown>({
        mutationKey: ['loginKey'],
        mutationFn: login,
        onSuccess: (data) => {
            setUser(data);
            navigate('/dashboard');
        },
    });
};
