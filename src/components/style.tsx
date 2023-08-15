import { css, styled } from 'styled-components';
import { colors } from '../styles/colors';
interface DescriptionProps {
    $isError?: boolean;
}

export const smallFont = css`
    font-size: 1.4rem;
    line-height: 2.4rem;
`;

export const mediumFont = css`
    font-size: 1.6rem;
    line-height: 2.4rem;
`;

export const mediumLargeFont = css`
    font-size: 1.8rem;
    line-height: 4.8rem;
`;

export const largeFont = css`
    font-size: 2.8rem;
    line-height: 4.8rem;
`;

export const PrimaryHeading = styled.h1`
    ${largeFont}
    color: ${colors.tunaGrey};
    font-weight: 400;
    margin: 0;
`;

export const PrimaryDescription = styled.p<DescriptionProps>`
    font-weight: 300;
    font-size: 1.8rem;
    color: ${(props) => (props.$isError ? colors.baseRed : colors.coolGrey)};
    margin: 0;
`;

export const buttonStyles = css`
    font-family: 'Hind';
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
`;

export const flexboxCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexboxSpaceBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const cardStyles = css`
    box-shadow: 0px 2px 3px 0px ${colors.shadowGrey};
    background-color: ${colors.baseWhite};
    border-radius: 0.4rem;
`;
