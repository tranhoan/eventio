import { css, styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import dropdown from '../../../assets/icons/dropdown.svg';
import { mediaQueries } from '../../../styles/media-queries';
import { buttonStyles, flexboxSpaceBetween } from '../../style';

export const FilterContainer = styled.div`
    ${flexboxSpaceBetween}
    margin-bottom: 4rem;
`;

export const DateFilter = styled.ul`
    list-style: none;
    font-size: 1.2rem;
    padding: 0;
    li {
        display: inline-block;
        margin-right: 3.2rem;
    }

    @media ${mediaQueries.mobile}, ${mediaQueries.tablet} {
        display: none;
    }
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
    ${buttonStyles}
    background: none;
    color: ${colors.aluminiumGrey};
    transition: color 100ms ease-in;
    font-size: 1.2rem;

    ${(props) =>
        props.$isActive &&
        css`
            svg path {
                fill: ${colors.tunaGrey};
            }

            color: ${colors.tunaGrey};
        `}

    &:hover svg path {
        transition: fill 100ms ease-in;
        fill: ${colors.tunaGrey};
    }

    &:hover {
        color: ${colors.tunaGrey};
    }
`;

export const DateSelect = styled.select`
    ${buttonStyles}
    background-color: ${colors.ghostWhite};
    color: ${colors.tunaGrey};
    font-size: 1.2rem;
    appearance: none;
    background: url(${dropdown});
    background-repeat: no-repeat;
    background-position: right center;
    display: none;

    &:focus {
        outline: none;
    }

    @media ${mediaQueries.mobile}, ${mediaQueries.tablet} {
        display: block;
    }
`;
export const View = styled.div``;
