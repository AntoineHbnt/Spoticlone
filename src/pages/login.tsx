import { Icon } from '../components/icon/icon';
import { signInWithSpotify } from '../utils/auth';

export const Login = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
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
