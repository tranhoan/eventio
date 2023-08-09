import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';
import { SideBanner } from './SideBanner';
import { Header } from '../base-ui/Header/Header';

interface Props {
    children: string | ReactNode;
}

export const LoginLayout = ({ children }: Props) => {
    return (
        <LoginContainer>
            <Header />
            <SideBanner />
            <MainContent>{children}</MainContent>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    display: flex;
    height: 100%;
`;

const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
