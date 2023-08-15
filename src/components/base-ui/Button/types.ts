import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'success' | 'error' | 'info';
    buttonSize: 'small' | 'medium';
    label: string;
    isLoading?: boolean;
}
