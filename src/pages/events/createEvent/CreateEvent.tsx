import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import {
    PrimaryDescription,
    PrimaryHeading,
    cardStyles,
    flexboxCenter,
} from '../../../components/style';
import { InputField } from '../../../components/base-ui/InputField/InputField';
import { InputFieldContainer } from '../../../components/base-ui/InputField/style';
import { Button } from '../../../components/base-ui/Button/Button';
import { CreateEventFormValues } from '../../../types';
import { useHeaderComponentContext } from '../../../components/layout/DashboardLayout';
import { CloseButton } from '../../../components/events/CloseButton/CloseButton';
import { useCreateEvent } from './queries/useCreateEvent';

export const CreateEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
        setError,
    } = useForm<CreateEventFormValues>();

    const { mutate, isLoading, error: submitError } = useCreateEvent();
    const { setHeaderComponent } = useHeaderComponentContext();

    useEffect(() => {
        setHeaderComponent(<CloseButton />);
        return () => {
            setHeaderComponent(null);
        };
    }, [setHeaderComponent]);

    const createEventSubmit = handleSubmit((values) => {
        const { eventDate, eventTime, ...otherValues } = values;
        const startsAtDate = new Date(`${eventDate}T${eventTime}:00`);
        const today = new Date();

        if (startsAtDate < today) {
            // if validation fails and date is the same, it means that the the actual time is failing
            setError(
                startsAtDate.getDate() === today.getDate()
                    ? 'eventTime'
                    : 'eventDate',
                { message: 'Must be a future date' }
            );
        } else {
            mutate({ ...otherValues, startsAt: startsAtDate.toISOString() });
        }
    });

    // hack to get dynamic minimum value for date input
    const minimumDateValueToday = new Date().toLocaleDateString('fr-ca');

    const submitErrorMessage = submitError
        ? submitError.response?.data.message
        : 'Enter details below.';

    return (
        <CreateEventForm onSubmit={createEventSubmit}>
            <PrimaryHeading>Create new event</PrimaryHeading>
            <PrimaryDescription $isError={submitError !== null}>
                {submitErrorMessage}
            </PrimaryDescription>
            <InputField
                label='Title'
                {...register('title', {
                    required: 'Title is required',
                    minLength: {
                        value: 3,
                        message: 'Title has to contain at least 3 characters',
                    },
                })}
                error={validationError.title?.message}
            />
            <InputField
                label='Description'
                {...register('description', {
                    required: 'Description is required',
                    minLength: {
                        value: 6,
                        message: 'Title has to contain at least 6 characters',
                    },
                })}
                error={validationError.description?.message}
            />
            <InputField
                label='Date'
                type='date'
                {...register('eventDate', { required: 'Date is required' })}
                min={minimumDateValueToday}
                error={validationError.eventDate?.message}
            />
            <InputField
                label='Time'
                type='time'
                {...register('eventTime', { required: 'Time is required' })}
                error={validationError.eventTime?.message}
            />
            <InputField
                label='Capacity'
                type='number'
                {...register('capacity', {
                    required: 'Capacity is required',
                    min: {
                        value: 1,
                        message: 'Capacity has to be at least 1',
                    },
                })}
                error={validationError.capacity?.message}
            />
            <Button
                buttonSize='medium'
                label='Create new event'
                variant='success'
                type='submit'
                isLoading={isLoading}
                disabled={isLoading}
            />
        </CreateEventForm>
    );
};

const CreateEventForm = styled.form`
    ${cardStyles}
    ${flexboxCenter}
    flex-direction: column;
    padding: 4rem 3.2rem;
    box-sizing: border-box;
    width: clamp(47rem, 7vw, 48rem);

    ${InputFieldContainer} {
        margin-bottom: 4rem;
    }

    ${PrimaryDescription} {
        margin-bottom: 4rem;
    }
`;
