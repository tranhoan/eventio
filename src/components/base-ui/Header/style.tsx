import { styled } from 'styled-components';
import { colors } from '../../../styles/colors';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { flexboxSpaceBetween } from '../../style';
import { HeaderProps } from './types';

interface HeaderElementProps {
    $logoColor: HeaderProps['logoColor'];
}

export const EventioLogo = styled(Logo)``;

export const HeaderElement = styled.header<HeaderElementProps>`
    ${flexboxSpaceBetween}
    position: sticky;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    padding: clamp(2.4rem, 3vw, 3.2rem) clamp(2.4rem, 5vw, 4rem);

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
