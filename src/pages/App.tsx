import { BrowserRouter } from 'react-router-dom';
import { Router } from '../router/router';
import React from 'react';
import { GlobalStyle } from '../styles/global';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Router />
        </BrowserRouter>
    );
}

export default App;
