import { ReactNode } from 'react';

export interface HeaderProps {
    logoColor: 'dark' | 'light';
    headerComponent?: ReactNode | null;
}
