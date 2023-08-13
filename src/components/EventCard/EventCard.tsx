import React from 'react';
import { Event } from '../../api/types';
import { Button } from '../base-ui/Button/Button';
import { useUserStore } from '../../store/useUserStore';
import { useMutateEvent } from '../../pages/dashboard/queries/useJoinEvent';
import {
    AttendContainer,
    AttendCount,
    Author,
    DateCreated,
    Description,
    EventContainer,
    EventTitle,
    Title,
    User,
} from './style';

interface Props {
    event: Event;
}

export const EventCard = ({ event }: Props) => {
    const { createdAt, title, owner, description, attendees, capacity, id } =
        event;
    const ownerName = `${owner.firstName} ${owner.lastName}`;
    const capacityLabel = `${attendees.length} of ${capacity}`;
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
        <EventContainer>
            <DateCreated>{createdAt}</DateCreated>
            <EventTitle>
                <Title>{title}</Title>
                <Author>{ownerName}</Author>
            </EventTitle>
            <Description>{description}</Description>
            <AttendContainer>
                <AttendCount as='footer'>
                    <User />
                    {capacityLabel}
                </AttendCount>
                {getEventButton()}
            </AttendContainer>
        </EventContainer>
    );
};
