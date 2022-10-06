import { Header } from './components/header/header';
import { IconSVG } from './components/icon/icon';
import { Protected } from './components/protected/protected';
import { Sidebar } from './components/sidebar/sidebar';
import { navigation, noLayoutNavigation } from './navigation';
import { Login } from './pages/login';
import { routes } from './router';

const App = () => {
  const location = useLocation();
  const connectedUser = !noLayoutNavigation.some((path) => location.pathname.includes(path));

  return (
    <div className="flex h-screen w-screen flex-col gap-2 overflow-hidden bg-black p-2">
      {connectedUser && <Header />}
      <div className="flex h-full w-full gap-2">
        {connectedUser && (
          <div className="w-60 shrink-0">
            <Sidebar navigation={navigation} />
          </div>
        )}
        <div className="flex-1 overflow-hidden rounded-md bg-background-base">
          <main className="w-full max-w-[1955px] p-6">
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
  );
};

export default App;
