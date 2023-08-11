import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';
import { Header } from '../base-ui/Header/Header';
import { mediaQueries } from '../../styles/media-queries';
import { colors } from '../../styles/colors';
import { EventioLogo } from '../base-ui/Header/style';
import { SideBanner } from './SideBanner';

interface Props {
    children: string | ReactNode;
}

export const LoginLayout = ({ children }: Props) => {
    return (
        <LoginContainer>
            <Header logoColor='light' />
            <SideBanner />
            <MainContent>{children}</MainContent>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    display: flex;
    height: 100%;

    @media ${mediaQueries.mobile} {
        & ${EventioLogo} path {
            fill: ${colors.tunaGrey};
        }
    }
`;

const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
