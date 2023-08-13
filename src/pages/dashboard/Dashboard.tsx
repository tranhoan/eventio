import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { EventCard } from '../../components/EventCard/EventCard';
import { useEvents } from './queries/useEvents';
import { EventList } from './style';

const Dashboard = () => {
    const result = useEvents();
    return (
        <DashboardLayout>
            <EventList>
                {result.data &&
                    result.data.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
            </EventList>
        </DashboardLayout>
    );
};

export default Dashboard;
