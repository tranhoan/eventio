import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    #root {
        height: 100%;
    }
    body, html{ 
        margin: 0;
        box-sizing: border-box;
        -ms-overflow-style: none;
        overflow: hidden;
        height: 100%;
    };
`
