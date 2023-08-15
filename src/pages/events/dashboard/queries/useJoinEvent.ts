import { useMutation, useQueryClient } from 'react-query';
import { joinEvent, leaveEvent } from '../../../../api/services/events';

export const useMutateEvent = (eventId: string, type: 'leave' | 'join') => {
    const queryCache = useQueryClient();
    return useMutation({
        mutationKey: ['joinEventKey'],
        mutationFn:
            type === 'join'
                ? () => joinEvent(eventId)
                : () => leaveEvent(eventId),
        onSuccess: () => {
            queryCache.invalidateQueries({ queryKey: ['eventsKey'] });
        },
    });
};
