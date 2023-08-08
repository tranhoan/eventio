import { ReactNode } from 'react'
import styled from 'styled-components'
import img from '../../assets/images/login_background.png'
import React from 'react'

interface Props {
    children: string | ReactNode
}

export const LoginLayout = ({ children }: Props) => {
    return (
        <LoginContainer>
            <LeftBanner>blabla</LeftBanner>
            <MainContent>{children}</MainContent>
        </LoginContainer>
    )
}

const LeftBanner = styled.aside`
    display: flex;
    flex-direction: column-reverse;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    width: 30%;
`
const LoginContainer = styled.div`
    display: flex;
    height: 100%;
`

const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`
