import React from 'react';
import { ButtonElement } from './style';

export interface ButtonProps {
    variant: 'success' | 'error' | 'info';
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    size: 'small' | 'medium';
    label: string;
}

export const Button = ({ label, ...other }: ButtonProps) => {
    return <ButtonElement {...other}>{label}</ButtonElement>;
};
