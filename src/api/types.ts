export interface User {
    id: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updateAt: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    startsAt: string;
    capacity: number;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
    attendees: Array<User>;
    owner: User;
}
