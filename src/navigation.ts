import { IconSVG } from './components/icon/icon';

export const mainNavigation = [
  {
    icon: IconSVG.HomeEmpty,
    label: 'Home',
    path: '/',
    activeIcon: IconSVG.HomeFulfilled,
  },
  {
    icon: IconSVG.SearchEmpty,
    label: 'Search',
    path: '/search',
    activeIcon: IconSVG.SearchFulfilled,
  },
  {
    icon: IconSVG.LibraryEmpty,
    label: 'Your Library',
    path: '/collection/playlists',
    activeIcon: IconSVG.LibraryFulfilled,
  },
];

export const secondNavigation = [
  {
    icon: IconSVG.CreatePlaylistIcon,
    label: 'Create Playlist',
    path: '/collection/playlist/:id',
  },
  {
    icon: IconSVG.LikedSongIcon,
    label: 'Liked Songs',
    path: '/collection/tracks',
  },
  {
    icon: IconSVG.YourEpisodesIcon,
    label: 'Your Episodes',
    path: '/collection/episodes',
  },
];

export const noLayoutNavigation = ['/login'];
