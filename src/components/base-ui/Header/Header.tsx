import React from 'react';
import { EventioLogo, HeaderElement } from './style';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';

interface Props {}

export const Header = (props: Props) => {
    return (
        <HeaderElement>
            <EventioLogo />
        </HeaderElement>
    );
};
