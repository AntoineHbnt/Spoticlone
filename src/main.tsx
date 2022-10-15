import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import 'remixicon/fonts/remixicon.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PlayBackContextProvider } from './context/PlaybackContext';
import { supabase } from './supabaseClient';
import { queryKeys } from './hooks/query-keys';

const queryClient = new QueryClient();

supabase.auth.onAuthStateChange((event, session) => {
  void queryClient.invalidateQueries();
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlayBackContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PlayBackContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
