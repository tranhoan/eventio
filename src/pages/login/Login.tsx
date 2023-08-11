import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from '../../components/layout/LoginLayout';
import { Button } from '../../components/base-ui/Button/Button';
import {
    PrimaryDescription,
    PrimaryHeading,
} from '../../components/base-ui/style';
import { InputField } from '../../components/base-ui/InputField/InputField';
import { Credentials } from '../../api/types';
import { useUserStore } from '../../store/useUserStore';
import { useLogin } from './queries/useLogin';
import { LoginContainer, LoginForm } from './style';

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
    } = useForm<Credentials>();
    const { mutate: login, error: submitError, isLoading } = useLogin();
    const { user } = useUserStore();
    const navigate = useNavigate();

    const descriptionLabel = submitError
        ? submitError.response?.data.message
        : 'Enter your details below.';

    // message is only shown for client side errors
    const getInputError = (type: 'email' | 'password') => {
        return validationError[type]?.message || (submitError ? '' : null);
    };

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [navigate, user]);

    return (
        <LoginLayout>
            <LoginContainer>
                <PrimaryHeading>Sign In to Eventio.</PrimaryHeading>
                <PrimaryDescription $isError={submitError !== null}>
                    {descriptionLabel}
                </PrimaryDescription>
                <LoginForm onSubmit={handleSubmit((data) => login(data))}>
                    <InputField
                        label='Email'
                        type='email'
                        autoComplete='email'
                        {...register('email', {
                            required: 'Email is required',
                        })}
                        error={getInputError('email')}
                    />
                    <InputField
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                        {...register('password', {
                            required: 'Password is required',
                        })}
                        error={getInputError('password')}
                    />
                    <Button
                        label='sign in'
                        variant='success'
                        buttonSize='medium'
                        type='submit'
                        isLoading={isLoading}
                        disabled={isLoading}
                    />
                </LoginForm>
            </LoginContainer>
        </LoginLayout>
    );
};
