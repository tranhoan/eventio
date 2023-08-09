import { styled } from 'styled-components';
import img from '../../assets/images/login_background.png';
import React from 'react';
import { colors } from '../../styles/colors';

export const SideBanner = () => {
    return (
        <BannerContainer>
            <QuoteContainer>
                <Quote>“Great, kid. Don't get cocky.”</Quote>
                <Rectangle />
                <Cite>Han Solo</Cite>
            </QuoteContainer>
        </BannerContainer>
    );
};

const BannerContainer = styled.aside`
    display: flex;
    flex-direction: column-reverse;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    width: 30%;
`;

const Cite = styled.cite`
    font-family: 'Hind';
    font-size: 1.8rem;
    color: ${colors.coolGrey};
`;

const Quote = styled.blockquote`
    color: ${colors.baseWhite};
    font-family: 'Playfair Display';
    line-height: 1.2;
`;

const QuoteContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8.6rem 2.4rem;
    font-size: 3.6rem;
    text-align: center;
`;
const Rectangle = styled.div`
    width: 1.2rem;
    height: 0.2rem;
    background-color: ${colors.secondaryGreen};
    margin: 2.1rem 1.5rem;
`;
