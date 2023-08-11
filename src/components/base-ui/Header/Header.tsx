import React from 'react';
import { useUserStore } from '../../../store/useUserStore';
import { EventioLogo, HeaderElement } from './style';
import { HeaderProps } from './types';
import { HeaderAccount } from './HeaderAccount/HeaderAccount';

export const Header = ({ logoColor }: HeaderProps) => {
    const { user } = useUserStore();
    return (
        <HeaderElement $logoColor={logoColor}>
            <EventioLogo />
            {user && <HeaderAccount user={user} />}
        </HeaderElement>
    );
};
