import { styled } from 'styled-components';
import { colors } from '../../styles/colors';
import { PrimaryHeading } from '../base-ui/style';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

export const EventContainer = styled.article`
    box-shadow: 0px 2px 3px 0px #0000001c;
    background-color: ${colors.baseWhite};
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    place-content: start stretch;
    font-family: 'Hind';
    padding: 3.2rem;
    border-radius: 0.4rem;
`;

export const DateCreated = styled.span`
    font-size: 1.4rem;
    font-weight: 300;
    color: ${colors.silverGrey};
`;

export const EventTitle = styled.span`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.2rem;
`;

export const Author = styled.span`
    font-size: 1.4rem;
    color: ${colors.boulderGrey};
`;

export const Title = styled(PrimaryHeading)`
    font-size: 2.2rem;
`;

export const Description = styled.p`
    font-size: 1.4rem;
    color: ${colors.coolGrey};
    margin: 0;
`;

export const AttendContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    margin-top: 2.4rem;
`;

export const User = styled(UserIcon)`
    margin-right: 0.4rem;
`;

export const AttendCount = styled(Description)`
    display: flex;
    align-items: center;
`;
