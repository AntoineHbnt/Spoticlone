import { Icon } from '../components/icon/icon';
import { useSession } from '../hooks/auth/use-session';
import { signInWithSpotify } from '../utils/auth';

export const Login = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-black">
      <button
        onClick={signInWithSpotify}
        className="flex h-fit items-center gap-2 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
      >
        <Icon name="spotify-fill ri-xl" />
        CONNECT WITH SPOTIFY
      </button>
    </div>
  );
};
