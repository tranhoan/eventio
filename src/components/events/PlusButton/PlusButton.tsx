import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import { ReactComponent as PlusSign } from '../../../assets/icons/plus.svg';
import { buttonStyles, flexboxCenter } from '../../style';

export const PlusButton = () => {
    return (
        <PlusButtonElement aria-label='create event' href='create'>
            <PlusSign />
        </PlusButtonElement>
    );
};
const PlusButtonElement = styled.a`
    ${flexboxCenter}
    ${buttonStyles}
    border-radius: 50%;
    width: 5.6rem;
    height: 5.6rem;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: clamp(1.6rem, 5vw, 3.2rem);
    box-shadow: 0px 6px 9px 0px ${colors.shadowGrey};
    background: linear-gradient(#0000, rgb(255 255 255/15%)) top/100% 800%;
    transition: background-position 150ms ease-in;
    background-color: ${colors.tunaGrey};

    &:hover {
        background-position: bottom;
    }
`;
