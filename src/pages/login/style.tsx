import { styled } from 'styled-components';
import { ButtonElement } from '../../components/base-ui/Button/style';
import { InputFieldContainer } from '../../components/base-ui/InputField/style';
import { mediaQueries } from '../../styles/media-queries';

export const LoginContainer = styled.section`
    width: clamp(32rem, 40%, 480px);

    ${InputFieldContainer} {
        margin-top: 4rem;
    }

    ${ButtonElement} {
        margin-top: 6.4rem;
    }

    @media ${mediaQueries.mobile} {
        text-align: center;
    }
`;

export const LoginForm = styled.form`
    width: 100%;
    margin-top: 6.4rem;
    display: flex;
    flex-direction: column;

    @media ${mediaQueries.mobile} {
        align-items: center;
    }
`;
