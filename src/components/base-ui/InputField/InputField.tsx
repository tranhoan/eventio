import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import { InputFieldContainer, InputFieldElement, Label } from './style';
import { ReactComponent as EyeIcon } from '../../../assets/icons/eye.svg';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, type, error, ...other }: InputFieldProps, ref) => {
        const [isPasswordShown, setIsPasswordShown] = useState(false);
        const passwordTypeValue = isPasswordShown ? 'text' : 'password';
        return (
            <>
                <InputFieldContainer $error={error}>
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
            </>
        );
    }
);

InputField.displayName = 'InputField';
