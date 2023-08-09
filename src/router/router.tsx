import { Route, Routes } from 'react-router-dom';
import { routerData } from './routerData';
import React from 'react';

export const Router = () => {
    const routes = routerData.map(({ title, path, element }) => (
        <Route key={title} path={path} element={element} />
    ));
    return <Routes>{routes}</Routes>;
};
