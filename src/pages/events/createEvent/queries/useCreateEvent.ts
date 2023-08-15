import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { createEvent } from '../../../../api/services/events';
import { routes } from '../../../../router/routerData';
import { CreateEventParams, Event } from '../../../../api/types';

interface IssueError {
    inclusive: boolean;
    exact: boolean;
    minimum: number;
    type: string;
    path: string[];
    message: string;
}

interface CreateEventError {
    code: string;
    message: string;
    issues?: IssueError;
}

export const useCreateEvent = () => {
    const queryCache = useQueryClient();
    const navigate = useNavigate();

    return useMutation<
        Event,
        AxiosError<CreateEventError>,
        CreateEventParams,
        unknown
    >({
        mutationKey: ['createEventKey'],
        mutationFn: createEvent,
        onSuccess: () => {
            queryCache.invalidateQueries({ queryKey: ['eventsKey'] });
            navigate(routes.dashboard);
        },
    });
};
