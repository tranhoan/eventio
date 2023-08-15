import { styled } from 'styled-components';
import { mediaQueries } from '../../styles/media-queries';

export const LoginForm = styled.form`
    width: 100%;
    margin-top: 6.4rem;
    display: flex;
    flex-direction: column;

    @media ${mediaQueries.mobile} {
        align-items: center;
    }
`;
