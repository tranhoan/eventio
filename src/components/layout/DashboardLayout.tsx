import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Header } from '../base-ui/Header/Header';
import { colors } from '../../styles/colors';

interface Props {
    children: ReactNode;
}

export const DashboardLayout = ({ children }: Props) => {
    return (
        <DashboardContainer>
            <Header logoColor='dark' />
            {children}
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
    width: 100%;
    background-color: ${colors.ghostWhite};
`;
