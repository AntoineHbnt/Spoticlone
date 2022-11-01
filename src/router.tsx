import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Artist } from './pages/content/artist/artist';
import { Home } from './pages/home/home';
import { Playlist } from './components/playlist/playlist';
import { Search } from './pages/search/search';
import { Album } from './pages/content/album/album';
import { Protected } from './components/protected/protected';
import App from './App';
import { Login } from './pages/login';
import { QueryClient } from '@tanstack/react-query';
import { NotFound } from './pages/not-found';

export const queryClient = new QueryClient();

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Protected />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/playlist/:id',
            element: <Playlist />,
          },
          {
            path: '/album/:id',
            element: <Album />,
          },
          {
            path: '/artist/:id',
            element: <Artist />,
          },
          {
            path: '/search/:query',
            element: <Search />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
