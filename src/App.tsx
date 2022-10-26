import { RouterProvider } from 'react-router-dom';
import { Header } from './components/header/header';
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
      <div className="flex-co flex h-screen w-screen">
        <div className="flex h-full w-full">
          {session && session && (
            <div className="w-60 shrink-0">
              <Sidebar />
            </div>
          )}
          <div className="relative w-full">
            {session && session && <Header />}
            <div className="h-full flex-1 overflow-hidden bg-background-base">
              <main className="h-full w-full overflow-y-auto">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
