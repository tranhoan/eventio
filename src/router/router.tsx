import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { routerData } from './routerData';

export const Router = () => {
    const routes = routerData.map(({ title, path, element }) => (
        <Route key={title} path={path} element={element} />
    ));
    return <Routes>{routes}</Routes>;
};
