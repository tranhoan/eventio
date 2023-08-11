import React from 'react';
import { LoginLayout } from '../../components/layout/LoginLayout';
import { Button } from '../../components/base-ui/Button/Button';
import { LoginContainer, LoginForm } from './style';
import {
    PrimaryDescription,
    PrimaryHeading,
} from '../../components/base-ui/style';
import { useForm } from 'react-hook-form';
import { useLogin } from './queries/useLogin';
import { InputField } from '../../components/base-ui/InputField/InputField';
import { Credentials } from '../../api/types';

export const Login = () => {
    const { register, handleSubmit } = useForm<Credentials>();
    const { mutate: login, error, isLoading } = useLogin();

    const submitLogin = () => {
        return handleSubmit((data) => login(data));
    };

    const descriptionLabel = error
        ? error.response?.data.message
        : 'Enter your details below.';

    return (
        <LoginLayout>
            <LoginContainer>
                <PrimaryHeading>Sign In to Eventio.</PrimaryHeading>
                <PrimaryDescription $isError={error !== null}>
                    {descriptionLabel}
                </PrimaryDescription>
                <LoginForm onSubmit={submitLogin()}>
                    <InputField
                        label='Email'
                        type='email'
                        autoComplete='email'
                        error={error?.message}
                        {...register('email')}
                    />
                    <InputField
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                        error={error?.message}
                        {...register('password')}
                    />
                    <Button
                        onClick={() => console.log('tran')}
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
