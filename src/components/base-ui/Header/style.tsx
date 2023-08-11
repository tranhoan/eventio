import { styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { HeaderProps } from './types';

interface HeaderElementProps {
    $logoColor: HeaderProps['logoColor'];
}

export const EventioLogo = styled(Logo)``;

export const HeaderElement = styled.header<HeaderElementProps>`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    margin: 4rem;

    ${EventioLogo} {
        width: clamp(2.3rem, 2vw, 2.9rem);
        height: auto;
        path {
            fill: ${(props) =>
                props.$logoColor === 'dark'
                    ? colors.tunaGrey
                    : colors.baseWhite};
        }
    }
`;
