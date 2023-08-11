import { styled } from 'styled-components';
import { colors } from '../../styles/colors';

interface DescriptionProps {
    $isError: boolean;
}

export const PrimaryHeading = styled.h1`
    font-family: 'Hind';
    font-size: 2.8rem;
    color: ${colors.tunaGrey};
    font-weight: 400;
    margin-bottom: 0.6rem;
`;

export const PrimaryDescription = styled.p<DescriptionProps>`
    font-weight: 300;
    font-size: 1.8rem;
    color: ${(props) => (props.$isError ? colors.baseRed : colors.coolGrey)};
    margin: 0;
`;
