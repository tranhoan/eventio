import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Header } from '../base-ui/Header/Header';
import { colors } from '../../styles/colors';
import { MainContent } from './style';

interface Props {
    children: ReactNode;
}

export const DashboardLayout = ({ children }: Props) => {
    return (
        <DashboardContainer>
            <Header logoColor='dark' />
            <MainContent>{children}</MainContent>
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.ghostWhite};
`;
