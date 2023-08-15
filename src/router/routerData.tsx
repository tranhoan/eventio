import { ReactNode, Suspense } from 'react';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loader } from '../components/base-ui/Loader/Loader';
import { DashboardLayout } from '../components/layout/DashboardLayout';

const Login = React.lazy(() =>
    import('../pages/login/Login').then((module) => ({ default: module.Login }))
);

const Dashboard = React.lazy(() =>
    import('../pages/events/dashboard/Dashboard').then((module) => ({
        default: module.Dashboard,
    }))
);
const CreateForm = React.lazy(() =>
    import('../pages/events/createEvent/CreateEvent').then((module) => ({
        default: module.CreateEvent,
    }))
);

const NotFound = React.lazy(() =>
    import('../pages/errors/404/NotFound').then((module) => ({
        default: module.NotFound,
    }))
);

export const routes = {
    login: '/login',
    dashboard: '/events/dashboard',
    createEvent: '/events/create',
};

const LoaderSuspense = ({ children }: { children: ReactNode }) => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <LoaderSuspense>
                <Login />
            </LoaderSuspense>
        ),
    },
    {
        path: 'login',
        element: (
            <LoaderSuspense>
                <Login />
            </LoaderSuspense>
        ),
    },
    {
        path: 'events',
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboard',
                element: (
                    <LoaderSuspense>
                        <Dashboard />
                    </LoaderSuspense>
                ),
            },
            {
                path: 'create',
                element: (
                    <LoaderSuspense>
                        <CreateForm />
                    </LoaderSuspense>
                ),
            },
        ],
    },
    {
        path: '*',
        element: (
            <LoaderSuspense>
                <NotFound />
            </LoaderSuspense>
        ),
    },
]);
