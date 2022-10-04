import { Login } from './pages/login';
import { signInWithSpotify } from './utils/auth';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
