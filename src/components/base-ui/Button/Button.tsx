import React from 'react';
import { Loader } from '../Loader/Loader';
import { ButtonElement, ButtonLabel } from './style';
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
            $buttonSize={buttonSize}
            $variant={variant}
            $isLoading={isLoading}
            {...other}
        >
            <ButtonLabel>{label}</ButtonLabel>
            <Loader />
        </ButtonElement>
    );
};
