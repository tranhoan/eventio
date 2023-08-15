import React, { ReactNode, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { Header } from '../base-ui/Header/Header';
import { colors } from '../../styles/colors';
import { useUserStore } from '../../store/useUserStore';
import { routes } from '../../router/routerData';
import { MainContent } from './style';

interface ContextType {
    setHeaderComponent: (component: ReactNode | null) => void;
}

export const DashboardLayout = () => {
    const [headerComponent, setHeaderComponent] = useState<ReactNode | null>(
        null
    );

    const { user } = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate(routes.login);
        }
    }, [user]);

    return (
        <DashboardContainer>
            <Header logoColor='dark' headerComponent={headerComponent} />
            <MainContent>
                <Outlet
                    context={{ setHeaderComponent } satisfies ContextType}
                />
            </MainContent>
        </DashboardContainer>
    );
};

export const useHeaderComponentContext = () => {
    return useOutletContext<ContextType>();
};

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.ghostWhite};
`;
