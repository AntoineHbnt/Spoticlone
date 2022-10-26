import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';
import 'remixicon/fonts/remixicon.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PlayBackContextProvider } from './context/PlaybackContext';
import { supabase } from './supabaseClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient, router } from './router';

supabase.auth.onAuthStateChange(() => {
  void queryClient.invalidateQueries();
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlayBackContextProvider>
        <RouterProvider router={router} />
      </PlayBackContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
