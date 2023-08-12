import React, { useState } from 'react';
import { User } from '../../../../api/types';

import { useUserStore } from '../../../../store/useUserStore';
import {
    Account,
    Dropdown,
    DropdownContainer,
    DropdownMenu,
    Initials,
    Name,
} from './style';

interface Props {
    user: User;
}
export const HeaderAccount = ({ user }: Props) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const { firstName, lastName } = user;
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    const fullName = `${firstName} ${lastName}`;
    const { setUser } = useUserStore();
    return (
        <DropdownContainer $isActive={isDropdownActive}>
            <Account
                onClick={() => setIsDropdownActive((prevActive) => !prevActive)}
            >
                <Initials>{initials}</Initials>
                <Name>{fullName}</Name>
                <Dropdown />
            </Account>
            <DropdownMenu>
                <li onClick={() => setUser(null)}>Sign out</li>
            </DropdownMenu>
        </DropdownContainer>
    );
};
