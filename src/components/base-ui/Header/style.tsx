import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/media-queries';
import { colors } from '../../../styles/colors';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';

export const HeaderElement = styled.header`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    margin: 4rem;
`;

export const EventioLogo = styled(Logo)`
    @media ${mediaQueries.mobile} {
        & path {
            fill: ${colors.tunaGrey};
        }
    }
`;
