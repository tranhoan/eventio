import { ReactNode } from 'react';
import styled from 'styled-components';
import React from 'react';
import { Header } from '../base-ui/Header/Header';
import { mediaQueries } from '../../styles/media-queries';
import { colors } from '../../styles/colors';
import { EventioLogo, HeaderElement } from '../base-ui/Header/style';
import { InputFieldContainer } from '../base-ui/InputField/style';
import { ButtonElement } from '../base-ui/Button/style';
import { flexboxCenter } from '../style';
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
            <MainContent>
                <LoginSection>{children}</LoginSection>
            </MainContent>
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

export const LoginSection = styled.section`
    width: clamp(32rem, 40%, 480px);

    ${InputFieldContainer} {
        margin-top: 4rem;
    }

    ${ButtonElement} {
        margin-top: 6.4rem;
    }

    @media ${mediaQueries.mobile} {
        text-align: center;
        ${flexboxCenter}
        flex-direction: column;
    }
`;
