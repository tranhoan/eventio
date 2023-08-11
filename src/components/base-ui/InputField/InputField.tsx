import React, { forwardRef, InputHTMLAttributes, useState } from 'react';

import { ReactComponent as EyeIcon } from '../../../assets/icons/eye.svg';
import {
    ErrorMessage,
    InputFieldContainer,
    InputFieldElement,
    Label,
} from './style';
export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | null;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, type, error, ...other }: InputFieldProps, ref) => {
        const [isPasswordShown, setIsPasswordShown] = useState(false);
        const passwordTypeValue = isPasswordShown ? 'text' : 'password';
        return (
            <>
                <InputFieldContainer $error={error !== null ? true : false}>
                    <Label>{label}</Label>
                    <InputFieldElement
                        placeholder={label}
                        ref={ref}
                        type={type === 'password' ? passwordTypeValue : type}
                        {...other}
                    />
                    {type === 'password' && (
                        <EyeIcon
                            onClick={() =>
                                setIsPasswordShown((prevShown) => !prevShown)
                            }
                        />
                    )}
                </InputFieldContainer>
                {error && error !== '' && <ErrorMessage>{error}</ErrorMessage>}
            </>
        );
    }
);

InputField.displayName = 'InputField';
