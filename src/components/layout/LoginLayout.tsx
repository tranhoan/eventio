import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';
import { Header } from '../base-ui/Header/Header';
import { mediaQueries } from '../../styles/media-queries';
import { colors } from '../../styles/colors';
import { EventioLogo, HeaderElement } from '../base-ui/Header/style';
import { SideBanner } from './SideBanner';
import { MainContent } from './style';

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

    ${HeaderElement} {
        position: fixed;
    }

    @media ${mediaQueries.mobile} {
        & ${EventioLogo} path {
            fill: ${colors.tunaGrey};
        }
    }
`;
