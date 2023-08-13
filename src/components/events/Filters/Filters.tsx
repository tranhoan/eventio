import { css, styled } from 'styled-components';
import React from 'react';
import { ReactComponent as ListView } from '../../../assets/icons/list.svg';
import { ReactComponent as GridView } from '../../../assets/icons/grid.svg';
import { colors } from '../../../styles/colors';
import { EventDateFilter, ViewType } from '../../../types';

interface Props {
    setView: (view: ViewType) => void;
    currentView: ViewType;
    currentDateFilter: EventDateFilter;
    setDateFilter: (dateFilter: EventDateFilter) => void;
}
export const Filters = ({
    setView,
    currentView,
    currentDateFilter,
    setDateFilter,
}: Props) => {
    return (
        <FilterContainer>
            <DateFilter>
                <li>
                    <FilterButton
                        $isActive={currentDateFilter === 'all'}
                        onClick={() => setDateFilter('all')}
                    >
                        All events
                    </FilterButton>
                </li>
                <li>
                    <FilterButton
                        $isActive={currentDateFilter === 'future'}
                        onClick={() => setDateFilter('future')}
                    >
                        Future events
                    </FilterButton>
                </li>
                <li>
                    <FilterButton
                        $isActive={currentDateFilter === 'past'}
                        onClick={() => setDateFilter('past')}
                    >
                        Past events
                    </FilterButton>
                </li>
            </DateFilter>
            <View>
                <FilterButton
                    onClick={() => setView('list')}
                    $isActive={currentView === 'list'}
                >
                    <ListView />
                </FilterButton>
                <FilterButton
                    onClick={() => setView('grid')}
                    $isActive={currentView === 'grid'}
                >
                    <GridView />
                </FilterButton>
            </View>
        </FilterContainer>
    );
};

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
`;

const DateFilter = styled.ul`
    list-style: none;
    font-size: 1.2rem;
    padding: 0;
    li {
        display: inline-block;
        margin-right: 3.2rem;
    }
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
    border: none;
    background: none;
    cursor: pointer;
    color: ${colors.aluminiumGrey};
    transition: color 100ms ease-in;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1.2rem;

    ${(props) =>
        props.$isActive &&
        css`
            svg path {
                fill: ${colors.tunaGrey};
            }

            color: ${colors.tunaGrey};
        `}

    &:hover svg path {
        transition: fill 100ms ease-in;
        fill: ${colors.tunaGrey};
    }

    &:hover {
        color: ${colors.tunaGrey};
    }
`;

const View = styled.div``;
