import { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    variant: 'success' | 'error' | 'info';
    buttonSize: 'small' | 'medium';
    label: string;
    isLoading?: boolean;
}
