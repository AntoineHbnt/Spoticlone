import { Helmet } from 'react-helmet';
import { Header } from './components/header/header';
import { MobileNavigation } from './components/mobile-navigation/mobile-navigation';
import { MobilePlayer } from './components/mobile-player/mobile-player';
import { Player } from './components/player/player';
import { Sidebar } from './components/sidebar/sidebar';
import { PlayBackContext } from './context/playback-context';
import { useSession } from './hooks/auth/use-session';
import ScrollToTop from './utils/misc/scroll-to-top';

const App = () => {
  const { data: session } = useSession();
  const playback = useContext(PlayBackContext);

  return (
    <>
      {playback && (
        <Helmet>
          <title>
            {playback.item!.name} • {(playback.item as SpotifyApi.TrackObjectFull)!.artists[0].name}
          </title>
        </Helmet>
      )}
      <ScrollToTop />
      <div className="relative flex h-screen w-screen shrink-0 flex-col">
        <div className="flex h-full w-full md:h-[calc(100vh_-_90px)]">
          {session && <Sidebar />}
          <div className="right-block relative flex flex-1 flex-col overflow-y-auto bg-background-base">
            {session && <Header />}
            <main className="absolute top-[60px] w-full  pb-[136px] md:pb-0">
              <Outlet />
            </main>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 hidden w-full md:block">
          <Player />
        </footer>
        <div
          className="absolute bottom-0 z-20 flex w-full flex-col md:hidden"
          style={{
            backgroundImage:
              '-webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgb(0, 0, 0), rgb(0, 0, 0)',
          }}
        >
          <MobilePlayer />
          <MobileNavigation />
        </div>
      </div>
    </>
  );
};

export default App;
