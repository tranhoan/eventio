import { apiClient } from '../client';
import { CreateEventParams, Event } from '../types';

export const getAllEvents = async () => {
    const response = await apiClient.get<Array<Event>>('/events');
    return response.data;
};

export const joinEvent = async (eventId: string) => {
    const response = await apiClient.post<Event>(
        `/events/${eventId}/attendees/me`
    );
    return response.data;
};

export const leaveEvent = async (eventId: string) => {
    const response = await apiClient.delete<Event>(
        `/events/${eventId}/attendees/me`
    );
    return response.data;
};

export const createEvent = async (params: CreateEventParams) => {
    const response = await apiClient.post<Event>('/events', {
        ...params,
    });
    return response.data;
};
