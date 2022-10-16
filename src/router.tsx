import { RouteObject } from 'react-router-dom';
import { Artist } from './pages/content/artist/artist';
import { Album } from './pages/content/album/album';
import { Track } from './pages/content/track/track';
import { Home } from './pages/home/home';
import { Playlist } from './components/playlist/playlist';

export const routes: RouteObject[] = [
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
    path: '/track/:id',
    element: <Track />,
  },
  {
    path: '/artist/:id',
    element: <Artist />,
  },
];
