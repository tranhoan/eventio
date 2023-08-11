import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
    #root {
        --baseRed: #FF4081;
        --baseWhite: #FFFFFF;
        --successGreen: #22D486;
        --secondaryGreen: #1BE38B;

        --aluminiumGrey: #A9AEB4;
        --coolGrey: #949EA8;
        --ironGrey: #D2D6DA;
        --lavenderGrey: #DAE1E7;
        --ghostGrey: #C9CED3;
        --tunaGrey: #323C46;

        height: 100%;
    }

    body, html{ 
        margin: 0;
        box-sizing: border-box;
        -ms-overflow-style: none;
        overflow: hidden;
        height: 100%;
        /* 62.5% of 16px browser font size is 10px, for better base calculations with rem */
        font-size: 62.5%;
        font-family: 'Hind', 'Playfair Display', serif
    };
`;
