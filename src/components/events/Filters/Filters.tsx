import React from 'react';
import { ReactComponent as ListView } from '../../../assets/icons/list.svg';
import { ReactComponent as GridView } from '../../../assets/icons/grid.svg';
import { EventDateFilter, ViewType } from '../../../types';
import {
    DateFilter,
    DateSelect,
    DateSelectContainer,
    DateSelectLabel,
    FilterButton,
    FilterContainer,
    View,
} from './style';

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

            <DateSelectContainer>
                <DateSelectLabel>Show:</DateSelectLabel>
                <DateSelect
                    onChange={(e) =>
                        setDateFilter(e.target.value as EventDateFilter)
                    }
                >
                    <option value='all'>All events</option>
                    <option value='future'>Future events</option>
                    <option value='past'>Past events</option>
                </DateSelect>
            </DateSelectContainer>

            <View>
                <FilterButton
                    onClick={() => setView('list')}
                    $isActive={currentView === 'list'}
                    aria-label='Display as list view'
                >
                    <ListView />
                </FilterButton>
                <FilterButton
                    onClick={() => setView('grid')}
                    $isActive={currentView === 'grid'}
                    aria-label='Display as grid view'
                >
                    <GridView />
                </FilterButton>
            </View>
        </FilterContainer>
    );
};
