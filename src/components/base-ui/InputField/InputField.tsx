import React, { forwardRef, InputHTMLAttributes, useState } from 'react';

import { styled } from 'styled-components';
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

        // we reassign the initial type to hide the pickers or to show/hide password value
        const adjustedType =
            type === 'date' || type === 'time'
                ? 'text'
                : type === 'password'
                ? passwordTypeValue
                : type;

        // in case of date and time we need to reassign its type on focus and pass it as props
        const focusObject =
            type === 'date' || type === 'time'
                ? {
                      onFocus: (
                          e: React.FocusEvent<HTMLInputElement, Element>
                      ) => (e.target.type = type),
                      onBlur: (
                          e: React.FocusEvent<HTMLInputElement, Element>
                      ) => (e.target.type = 'text'),
                  }
                : {};

        return (
            <InputFieldContainer $error={error == null ? false : true}>
                <Label>{label}</Label>
                <InputFieldElement
                    placeholder={label}
                    ref={ref}
                    type={adjustedType}
                    {...other}
                    {...focusObject}
                />
                {type === 'password' && (
                    <button
                        type='button'
                        aria-label='toggle password visibility'
                        onClick={() =>
                            setIsPasswordShown((prevShown) => !prevShown)
                        }
                    >
                        <EyeIcon />
                    </button>
                )}
                {error && error !== '' && <ErrorMessage>{error}</ErrorMessage>}
            </InputFieldContainer>
        );
    }
);

InputField.displayName = 'InputField';
