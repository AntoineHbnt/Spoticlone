import { Header } from './components/header/header';
import { Protected } from './components/protected/protected';
import { Sidebar } from './components/sidebar/sidebar';
import { useSession } from './hooks/auth/use-session';
import { noLayoutNavigation } from './navigation';
import { Login } from './pages/login';
import { routes } from './router';

const App = () => {
  const location = useLocation();
  const { data: session } = useSession();
  const connectedUser = !noLayoutNavigation.some((path) => location.pathname.includes(path));

  return (
    <div className="flex-co flex h-screen w-screen">
      <div className="flex h-full w-full">
        {session && connectedUser && (
          <div className="w-60 shrink-0">
            <Sidebar />
          </div>
        )}
        <div className="relative w-full">
          {session && connectedUser && <Header />}
          <div className="h-full flex-1 overflow-hidden bg-background-base">
            <main className="h-full w-full max-w-[1955px] overflow-y-auto">
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
        </div>
      </div>
    </div>
  );
};

export default App;
