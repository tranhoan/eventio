import { styled } from 'styled-components';
import { colors } from '../../../../styles/colors';
import { mediaQueries } from '../../../../styles/media-queries';
import { ReactComponent as DropdownIcon } from '../../../../assets/icons/dropdown.svg';
import { flexboxCenter, smallFont } from '../../../style';

export const Account = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
`;

export const Dropdown = styled(DropdownIcon)``;

export const DropdownMenu = styled.ul`
    ${smallFont}
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.8rem;
    list-style: none;
    padding: 2.4rem 0.8rem;
    box-sizing: border-box;
    width: 120%;
    background-color: ${colors.baseWhite};
    box-shadow: 0px 2px 3px 0px ${colors.shadowGrey};
    display: flex;
    justify-content: center;

    li {
        cursor: pointer;
        color: ${colors.tunaGrey};
    }
`;

export const DropdownContainer = styled.div<{ $isActive: boolean }>`
    position: relative;

    ${DropdownMenu} {
        transition: transform 150ms ease-in-out;
        transform-origin: top;
        transform: ${(props) => (props.$isActive ? 'scale(1)' : 'scale(0)')};
    }

    ${Dropdown} {
        transition: transform 150ms ease-in;
        transform: ${(props) =>
            props.$isActive ? 'rotate(180deg)' : 'rotate(0)'};
    }
`;

export const Initials = styled.div`
    ${flexboxCenter}
    ${smallFont}
    line-height: initial;

    background-color: ${colors.mistGrey};
    color: ${colors.coolGrey};
    border-radius: 50%;
    font-family: 'Hind';
    width: clamp(3.2rem, 2vw, 4rem);
    height: clamp(3.2rem, 2vw, 4rem);
    margin-right: 0.8rem;
`;

export const Name = styled.span`
    font-family: 'Hind';
    ${smallFont}

    color: ${colors.coolGrey};
    margin-right: 0.8rem;

    @media ${mediaQueries.mobile} {
        display: none;
    }
`;
