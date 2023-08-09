import { css, styled } from 'styled-components';
import { ButtonProps } from './Button';
import { colors } from '../../../styles/colors';

export const ButtonElement = styled.button<Omit<ButtonProps, 'label'>>`
    font-family: 'Hind';
    text-transform: uppercase;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.baseWhite};
    border: none;
    letter-spacing: 0.1rem;
    font-weight: bold;
    cursor: pointer;
    background: linear-gradient(#0000, rgb(0 0 0/15%)) top/100% 800%;
    transition: background-position 150ms ease-in;
    width: max-content;

    &:hover {
        background-position: bottom;
    }

    ${(props) =>
        props.size === 'medium'
            ? css`
                  padding: 1.2rem 9rem;
                  font-size: 1.6rem;
              `
            : css`
                  padding: 0.8rem 3.2rem;
                  font-size: 1.4rem;
              `};

    ${(props) =>
        props.variant === 'success' &&
        css`
            background-color: ${colors.successGreen};
        `}

    ${(props) =>
        props.variant === 'error' &&
        css`
            background-color: ${colors.baseRed};
        `}

        ${(props) =>
        props.variant === 'info' &&
        css`
            background-color: ${colors.tunaGrey};
        `}
`;
