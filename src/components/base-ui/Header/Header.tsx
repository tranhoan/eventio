import React from 'react';
import { useUserStore } from '../../../store/useUserStore';
import { EventioLogo, HeaderElement } from './style';
import { HeaderProps } from './types';
import { HeaderAccount } from './HeaderAccount/HeaderAccount';

export const Header = ({ logoColor, headerComponent }: HeaderProps) => {
    const { user } = useUserStore();
    return (
        <HeaderElement $logoColor={logoColor}>
            <EventioLogo />
            {user && !headerComponent && <HeaderAccount user={user} />}
            {headerComponent}
        </HeaderElement>
    );
};
