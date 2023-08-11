import { ReactNode } from 'react';
import React from 'react';
import { Login } from '../pages/login/Login';

interface RouterData {
    title: string;
    path: string;
    element: ReactNode;
}
export const routerData: Array<RouterData> = [
    {
        title: 'login',
        path: '/login',
        element: <Login />,
    },
    {
        title: 'dashboard',
        path: '/dashboard',
        element: <>dashboard</>,
    },
];
