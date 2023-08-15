import { CreateEventParams } from './api/types';

export type ViewType = 'list' | 'grid';
export type EventDateFilter = 'all' | 'future' | 'past';
export interface CreateEventFormValues
    extends Omit<CreateEventParams, 'startsAt'> {
    eventDate: string;
    eventTime: string;
}
