import React from 'react';
import { styled } from 'styled-components';
import { colors } from '../../../../styles/colors';
import { User } from '../../../../api/types';
import { mediaQueries } from '../../../../styles/media-queries';
import { ReactComponent as Dropdown } from '../../../../assets/icons/dropdown.svg';

interface Props {
    user: User;
}
export const HeaderAccount = ({ user }: Props) => {
    const { firstName, lastName } = user;
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    const fullName = `${firstName} ${lastName}`;
    return (
        <AccountContainer>
            <Initials>{initials}</Initials>
            <Name>{fullName}</Name>
            <Dropdown />
        </AccountContainer>
    );
};

const AccountContainer = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
`;

const Initials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.mistGrey};
    color: ${colors.coolGrey};
    border-radius: 50%;
    font-family: 'Hind';
    font-size: 1.4rem;
    width: clamp(3.2rem, 2vw, 4rem);
    height: clamp(3.2rem, 2vw, 4rem);
    margin-right: 0.8rem;
`;

const Name = styled.span`
    font-family: 'Hind';
    font-size: 1.4rem;
    color: ${colors.coolGrey};
    margin-right: 0.8rem;

    @media ${mediaQueries.mobile} {
        display: none;
    }
`;
