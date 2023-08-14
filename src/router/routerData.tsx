import { ReactNode, Suspense } from 'react';
import React from 'react';
import { Loader } from '../components/base-ui/Loader/Loader';

const Login = React.lazy(() =>
    import('../pages/login/Login').then((module) => ({ default: module.Login }))
);

const Dashboard = React.lazy(() =>
    import('../pages/dashboard/Dashboard').then((module) => ({
        default: module.Dashboard,
    }))
);

interface RouterData {
    title: string;
    path: string;
    element: ReactNode;
}

export const routes = {
    login: '/login',
    dashboard: '/dashboard',
};

const LoaderSuspense = ({ children }: { children: ReactNode }) => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export const routerData: Array<RouterData> = [
    {
        title: 'login',
        path: routes.login,
        element: (
            <LoaderSuspense>
                <Login />
            </LoaderSuspense>
        ),
    },
    {
        title: 'dashboard',
        path: routes.dashboard,
        element: (
            <LoaderSuspense>
                <Dashboard />
            </LoaderSuspense>
        ),
    },
];
