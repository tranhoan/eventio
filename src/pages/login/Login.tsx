import React from 'react';
import { LoginLayout } from '../../components/layout/LoginLayout';
import { Button } from '../../components/base-ui/Button/Button';
import { InputField } from '../../components/base-ui/InputField/InputField';
import { LoginContainer, LoginForm } from './style';
import {
    PrimaryDescription,
    PrimaryHeading,
} from '../../components/base-ui/style';

export const Login = () => {
    return (
        <LoginLayout>
            <LoginContainer>
                <PrimaryHeading>Sign In to Eventio.</PrimaryHeading>
                <PrimaryDescription>
                    Enter your details below.
                </PrimaryDescription>
                <LoginForm>
                    <InputField
                        label='Email'
                        type='email'
                        autoComplete='email'
                    />
                    <InputField
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                    />
                    <Button
                        onClick={() => console.log('tran')}
                        label='sign in'
                        variant='success'
                        size='medium'
                    />
                </LoginForm>
            </LoginContainer>
        </LoginLayout>
    );
};
