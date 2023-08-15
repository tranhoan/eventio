import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import { routes } from '../../../router/routerData';
import { ReactComponent as TimesIcon } from '../../../assets/icons/times.svg';
import { mediaQueries } from '../../../styles/media-queries';

export const CloseButton = () => {
    return (
        <CloseButtonElement href={routes.dashboard}>
            <TimesIcon />
            <CloseLabel>Close</CloseLabel>
        </CloseButtonElement>
    );
};

const CloseButtonElement = styled.a`
    color: ${colors.tunaGrey};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    font-weight: 300;
    text-decoration: none;
`;

const CloseLabel = styled.span`
    transition: letter-spacing 100ms ease-out;
    &:hover {
        letter-spacing: 0.1rem;
    }

    @media ${mediaQueries.mobile} {
        display: none;
    }
`;
