import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Router } from '../router/router';
import { GlobalStyle } from '../styles/global';

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <ReactQueryDevtools initialIsOpen={false} />
                <Router />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
