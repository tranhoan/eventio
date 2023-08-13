import React from 'react';
import Lottie from 'lottie-react';
import { styled } from 'styled-components';
import loadingAnimation from '../../../assets/animations/spinner.json';

export const Loader = () => {
    return (
        <LoaderElement
            aria-label='loader'
            animationData={loadingAnimation}
            loop={true}
        />
    );
};

export const LoaderElement = styled(Lottie)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 10%;
`;
