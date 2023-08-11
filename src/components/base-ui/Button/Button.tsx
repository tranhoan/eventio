import React from 'react';
import loadingAnimation from '../../../assets/animations/spinner.json';
import { ButtonElement, ButtonLabel, Loader } from './style';
import { ButtonProps } from './types';
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
