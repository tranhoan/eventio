import React from 'react';
import { Event } from '../../../api/types';
import { Button } from '../../base-ui/Button/Button';
import { useUserStore } from '../../../store/useUserStore';
import { useMutateEvent } from '../../../pages/dashboard/queries/useJoinEvent';
import { ViewType } from '../../../types';
import { getDateFormat } from '../../../utils/date';
import {
    AttendContainer,
    AttendCount,
    Author,
    DateCreated,
    Description,
    EventContainer,
    Title,
    User,
} from './style';

interface Props {
    event: Event;
    view: ViewType;
}

export const EventCard = ({ event, view }: Props) => {
    const { startsAt, title, owner, description, attendees, capacity, id } =
        event;
    const ownerName = `${owner.firstName} ${owner.lastName}`;
    const capacityLabel = `${attendees.length} of ${capacity}`;
    const eventDate = new Date(startsAt);

    const { user } = useUserStore();
    const { mutate: joinEvent, isLoading: isJoining } = useMutateEvent(
        id,
        'join'
    );
    const { mutate: leaveEvent, isLoading: isLeaving } = useMutateEvent(
        id,
        'leave'
    );

    const getEventButton = () => {
        if (event.ownerId === user?.id) {
            return <Button label='edit' variant='info' buttonSize='small' />;
        }
        const isUserAttendee =
            user && attendees.map((attendee) => attendee.id).includes(user.id);

        const attendButton = isUserAttendee ? (
            <Button
                variant='error'
                label='leave'
                buttonSize='small'
                onClick={() => leaveEvent()}
                disabled={isLeaving}
            />
        ) : (
            <Button
                variant='success'
                label='join'
                buttonSize='small'
                onClick={() => joinEvent()}
                isLoading={isJoining}
                disabled={!(attendees.length < capacity) || isJoining}
            />
        );

        return attendButton;
    };
    return (
        <EventContainer $view={view}>
            <DateCreated>{getDateFormat(eventDate)}</DateCreated>
            <Title>{title}</Title>
            <Author>{ownerName}</Author>
            <Description>{description}</Description>
            <AttendContainer>
                <AttendCount>
                    <User />
                    {capacityLabel}
                </AttendCount>
                {getEventButton()}
            </AttendContainer>
        </EventContainer>
    );
};
