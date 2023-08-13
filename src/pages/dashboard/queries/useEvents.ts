import { useQuery } from 'react-query';
import { getAllEvents } from '../../../api/services/events';

export const useEvents = () => {
    return useQuery({
        queryKey: ['eventsKey'],
        queryFn: getAllEvents,
        refetchOnWindowFocus: false,
    });
};
