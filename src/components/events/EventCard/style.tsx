import { css, styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import {
    PrimaryHeading,
    cardStyles,
    flexboxSpaceBetween,
    mediumFont,
    smallFont,
} from '../../style';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ViewType } from '../../../types';
import { mediaQueries } from '../../../styles/media-queries';

export const EventContainer = styled.article<{ $view: ViewType }>`
    ${cardStyles}
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    place-content: start stretch;
    font-family: 'Hind';
    padding: 3.2rem;

    ${(props) =>
        props.$view === 'list' &&
        css`
            grid-template-rows: none;
            grid-auto-flow: column;
            grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr;
            place-content: center start;
            align-items: center;
            padding: 1.2rem 3.2rem;
            gap: 3.2rem;

            ${Title} {
                order: 1;
                margin: 0;
                font-size: 1.8rem;
                line-height: 2.4rem;
            }
            ${Description} {
                order: 2;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            ${Author} {
                order: 3;
                margin: 0;
            }
            ${DateCreated} {
                order: 4;
                margin: 0;
            }
            ${AttendContainer} {
                order: 5;
                margin: 0;
                display: flex;
                justify-content: space-between;
                height: 100%;
                gap: 1.6rem;

                ${User} {
                    display: none;
                }
            }
        `}

    @media ${mediaQueries.mobile}, ${mediaQueries.tablet} {
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        gap: 0.8rem;
    }
`;

export const DateCreated = styled.span`
    ${smallFont}
    font-weight: 300;
    margin-bottom: 1rem;
    color: ${colors.silverGrey};
`;

export const Author = styled.span`
    ${smallFont}
    color: ${colors.boulderGrey};
    margin-bottom: 3.2rem;
`;

export const Title = styled(PrimaryHeading)`
    font-size: 2.2rem;
`;

export const Description = styled.p`
    ${mediumFont}
    color: ${colors.coolGrey};
    margin: 0;
`;

export const AttendContainer = styled.span`
    ${flexboxSpaceBetween}
    align-self: flex-end;
    margin-top: 2.4rem;
    margin-top: 3.2rem;
`;

export const User = styled(UserIcon)`
    margin-right: 0.4rem;
`;

export const AttendCount = styled.span`
    ${smallFont}
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: ${colors.coolGrey};
`;
