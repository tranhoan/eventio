import { createGlobalStyle } from 'styled-components';
import hindLight from '../assets/fonts/Hind/Hind-Light.ttf';
import hindRegular from '../assets/fonts/Hind/Hind-Regular.ttf';
import hindMedium from '../assets/fonts/Hind/Hind-Medium.ttf';
import playfair from '../assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf';

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

    @font-face {
        font-family: 'Hind';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${hindLight}) format('truetype');
    }

    @font-face {
        font-family: 'Hind';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${hindRegular}) format('truetype');
    }

    @font-face {
        font-family: 'Hind';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${hindMedium}) format('truetype');
    }

    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${playfair}) format('truetype');
    }
`;
