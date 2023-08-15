import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from '../../../components/layout/LoginLayout';
import { PrimaryDescription, PrimaryHeading } from '../../../components/style';
import { routes } from '../../../router/routerData';
import { Button } from '../../../components/base-ui/Button/Button';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <LoginLayout>
            <PrimaryHeading>404 Error - page not found</PrimaryHeading>
            <PrimaryDescription>
                Seems like Darth Vader just hits our website and drops it down.
                Please press the refresh button and everything should be fine
                again.
            </PrimaryDescription>
            <Button
                buttonSize='medium'
                label='Refresh'
                variant='info'
                onClick={() => navigate(routes.dashboard)}
            />
        </LoginLayout>
    );
};
