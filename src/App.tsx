import { RouterProvider } from 'react-router-dom';
import { Header } from './components/header/header';
import { MobileNavigation } from './components/mobile-navigation/mobile-navigation';
import { Protected } from './components/protected/protected';
import { Sidebar } from './components/sidebar/sidebar';
import { useSession } from './hooks/auth/use-session';
import { noLayoutNavigation } from './navigation';
import { Login } from './pages/login';
import { router } from './router';
import ScrollToTop from './utils/misc/scroll-to-top';

const App = () => {
  const { data: session } = useSession();

  return (
    <>
      <ScrollToTop />
      <div className="flex-co relative flex h-screen w-screen shrink-0">
        <div className="flex h-full w-full">
          {session && <Sidebar />}
          <div className="relative flex-1">
            {session && <Header />}
            <div className="h-full w-full overflow-hidden bg-background-base">
              <main className="h-full w-full overflow-y-auto pb-[136px] md:pb-0">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 flex w-full flex-col md:hidden"
          style={{
            backgroundImage:
              '-webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgb(0, 0, 0), rgb(0, 0, 0)',
          }}
        >
          <div className="mobile-player h-14"></div>
          <MobileNavigation />
        </div>
      </div>
    </>
  );
};

export default App;
