import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from '../router/router';
import { GlobalStyle } from '../styles/global';

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
