import React, {
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    ReactNode,
    useState,
} from 'react';
import { InputFieldContainer, InputFieldElement, Label } from './style';
import { ReactComponent as EyeIcon } from '../../../assets/icons/eye.svg';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputField = ({ label, type, ...other }: InputFieldProps) => {
    const [isPasswordShown, setIsPasswordShows] = useState(false);
    const passwordTypeValue = isPasswordShown ? 'text' : 'password';
    return (
        <InputFieldContainer>
            <Label>{label}</Label>
            <InputFieldElement
                placeholder={label}
                type={type === 'password' ? passwordTypeValue : type}
                {...other}
            />
            {type === 'password' && (
                <EyeIcon
                    onClick={() =>
                        setIsPasswordShows((prevShown) => !prevShown)
                    }
                />
            )}
        </InputFieldContainer>
    );
};
