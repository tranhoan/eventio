import { css, styled } from 'styled-components';

import { colors } from '../../../styles/colors';

export const InputFieldElement = styled.input`
    border: none;
    font-family: 'Hind';
    font-size: 1.8rem;
    font-weight: 300;
    width: 100%;
    color: ${colors.tunaGrey};
    background: none;
    padding: 0;

    &::placeholder {
        color: ${colors.ghostGrey};
    }
    &:focus {
        outline: none;
    }

    &:focus::placeholder {
        visibility: hidden;
    }
`;

export const Label = styled.span`
    display: block;
    font-weight: 300;
    font-size: 1.4rem;
    color: ${colors.ironGrey};
    opacity: 0;
    z-index: -1;
    position: absolute;
    transition:
        transform 200ms ease-out,
        opacity 200ms ease-out;
`;

export const InputFieldContainer = styled.label<{ $error: boolean }>`
    display: flex;
    padding-bottom: 0.4rem;
    width: 100%;
    height: max-content;
    position: relative;
    border-bottom: 1px solid ${colors.lavenderGrey};

    ${(props) =>
        props.$error &&
        css`
            border-bottom-color: ${colors.baseRed};
        `}

    &:has(${InputFieldElement}:focus) {
        border-bottom-color: ${colors.tunaGrey};
    }

    &:has(${InputFieldElement}:focus) ${Label} {
        opacity: 1;
        z-index: 1;
        transform: translateY(-100%);
    }

    /* A not very ideal hack to keep date and time inputs the same height as other inputs.
     By default these are 2px taller than other types for some reason */

    &:has(input[type='date']),
    &:has(input[type='time']) {
        padding-bottom: 0.2rem;
    }
`;

export const ErrorMessage = styled.p`
    font-size: 1.4rem;
    font-family: 'Hind';
    font-weight: 200;
    color: ${colors.baseRed};
    margin: 0.4rem 0;
    position: absolute;
    top: 100%;
`;
