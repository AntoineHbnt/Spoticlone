import { Protected } from './components/protected/protected';
import { useAuthUser } from './hooks/auth/use-auth-user';
import { Login } from './pages/login';
import { routes } from './router';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Protected />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
