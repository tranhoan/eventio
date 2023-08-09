import { styled } from 'styled-components';
import { ButtonElement } from '../../components/base-ui/Button/style';
import { InputFieldContainer } from '../../components/base-ui/InputField/style';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;

    ${InputFieldContainer} {
        margin-top: 4rem;
    }

    ${ButtonElement} {
        margin-top: 6.4rem;
    }
`;

export const LoginForm = styled.form`
    width: 100%;
    margin-top: 6.4rem;
`;
