import { css, styled } from 'styled-components';
import { ViewType } from '../../../types';
import { mediaQueries } from '../../../styles/media-queries';
import { LoaderElement } from '../../../components/base-ui/Loader/Loader';

export const EventList = styled.div<{ $view: ViewType }>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(39rem, 1fr));
    grid-auto-rows: 1fr;
    gap: 1.5rem;
    transition: all 200ms ease;

    ${(props) =>
        props.$view === 'list' &&
        css`
            grid-template-columns: none;
            grid-template-rows: auto;
        `}

    @media ${mediaQueries.mobile} {
        grid-template-columns: 1fr;
    }
`;

export const EventSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    margin-inline: clamp(0.8rem, 10vw, 12rem);
    width: 100%;

    ${LoaderElement} {
        width: 5%;
    }

    @media ${mediaQueries.mobile} {
        margin-inline: 0.8rem;
    }
`;
