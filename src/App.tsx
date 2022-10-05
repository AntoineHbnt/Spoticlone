import { IconSVG } from './components/icon/icon';
import { Protected } from './components/protected/protected';
import { Sidebar } from './components/sidebar/sidebar';
import { Login } from './pages/login';
import { routes } from './router';

const navigation = [
  {
    icon: IconSVG.LibraryEmpty,
    label: 'Your Library',
    path: '/collection/playlists',
    activeIcon: IconSVG.LibraryFulfilled,
  },
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

const App = () => {
  return (
    <div className="flex h-screen w-full gap-2 bg-black p-2">
      <div className="w-60 shrink-0">
        <Sidebar navigation={navigation} />
      </div>
      <main className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Protected />}>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
