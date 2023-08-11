import { BrowserRouter } from 'react-router-dom';
import { Router } from '../router/router';
import React from 'react';
import { GlobalStyle } from '../styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Router />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
