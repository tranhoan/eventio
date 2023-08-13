import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { EventCard } from '../../components/events/EventCard/EventCard';
import { Filters } from '../../components/events/Filters/Filters';
import { EventDateFilter, ViewType } from '../../types';
import { Loader } from '../../components/base-ui/Loader/Loader';
import { Event } from '../../api/types';
import { useEvents } from './queries/useEvents';
import { EventList, EventSection } from './style';

export const Dashboard = () => {
    const { data, isFetching } = useEvents();
    const [view, setView] = useState<ViewType>('grid');
    const [dateFilter, setDateFilter] = useState<EventDateFilter>('future');

    const getFilteredEvents = (events: Array<Event>) => {
        const todayDate = new Date();
        return events
            .filter((event) => {
                const eventDate = new Date(event.startsAt);
                if (dateFilter === 'future') return eventDate > todayDate;
                else if (dateFilter === 'past') return eventDate < todayDate;
                return event;
            })
            .map((filteredEvent) => {
                return (
                    <EventCard
                        event={filteredEvent}
                        key={filteredEvent.id}
                        view={view}
                    />
                );
            });
    };

    return (
        <DashboardLayout>
            <EventSection>
                <Filters
                    setView={setView}
                    currentView={view}
                    currentDateFilter={dateFilter}
                    setDateFilter={setDateFilter}
                />
                {isFetching ? (
                    <Loader />
                ) : (
                    <EventList $view={view}>
                        {data && getFilteredEvents(data)}
                    </EventList>
                )}
            </EventSection>
        </DashboardLayout>
    );
};
