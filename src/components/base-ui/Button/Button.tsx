import React, { InputHTMLAttributes } from 'react';
import { ButtonElement, ButtonLabel, Loader } from './style';
import loadingAnimation from '../../../assets/animations/spinner.json';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    variant: 'success' | 'error' | 'info';
    buttonSize: 'small' | 'medium';
    label: string;
    isLoading?: boolean;
}

export const Button = ({
    label,
    buttonSize,
    variant,
    isLoading,
    ...other
}: ButtonProps) => {
    return (
        <ButtonElement
            {...other}
            type='submit'
            $buttonSize={buttonSize}
            $variant={variant}
            $isLoading={isLoading}
        >
            <ButtonLabel>{label}</ButtonLabel>
            <Loader
                aria-label='loader'
                animationData={loadingAnimation}
                loop={true}
            />
        </ButtonElement>
    );
};
