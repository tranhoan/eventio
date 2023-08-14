import { css, styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import { LoaderElement } from '../Loader/Loader';
import { buttonStyles, flexboxCenter } from '../../style';
import { ButtonProps } from './types';

interface TransientProps {
    $variant: ButtonProps['variant'];
    $buttonSize: ButtonProps['buttonSize'];
    $isLoading: ButtonProps['isLoading'];
}

export const ButtonLabel = styled.span``;

export const ButtonElement = styled.button<TransientProps>`
    ${buttonStyles}
    ${flexboxCenter}
    border-radius: 4px;
    color: ${colors.baseWhite};
    font-weight: bold;
    background: linear-gradient(#0000, rgb(0 0 0/15%)) top/100% 800%;
    transition: background-position 150ms ease-in;
    width: max-content;
    position: relative;

    &:hover {
        background-position: bottom;
    }

    &:disabled {
        pointer-events: none;
        cursor: default;
    }

    ${ButtonLabel} {
        visibility: ${(props) => (props.$isLoading ? 'hidden' : 'visible')};
    }

    ${LoaderElement} {
        visibility: ${(props) => (props.$isLoading ? 'visible' : 'hidden')};
    }

    ${(props) =>
        props.$buttonSize === 'medium'
            ? css`
                  padding: 1.2rem 9rem;
                  font-size: 1.6rem;
                  min-width: 10rem;
              `
            : css`
                  padding: 0.8rem 3.2rem;
                  font-size: 1.4rem;
              `};

    ${(props) =>
        props.$variant === 'success' &&
        css`
            background-color: ${colors.successGreen};
        `}

    ${(props) =>
        props.$variant === 'error' &&
        css`
            background-color: ${colors.baseRed};
        `}

        ${(props) =>
        props.$variant === 'info' &&
        css`
            background-color: ${colors.tunaGrey};
        `}
`;
