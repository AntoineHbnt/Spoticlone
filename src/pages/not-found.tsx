import { useRouteError } from 'react-router-dom';
import { Icon, IconSVG } from '../components/icon/icon';

export const NotFound = () => {
  const error: any = useRouteError();

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-background-base text-white">
      <Icon svg={IconSVG.Spotify} fill="#1ed760" width={60} />
      <h1 className="mt-10 mb-4 text-4xl font-bold">Page not found</h1>
      <p className="mb-10">We can’t seem to find the page you are looking for.</p>
      <NavLink to="/" className="rounded-full bg-white py-3 px-8 font-bold text-black">
        Home
      </NavLink>
      {error && (
        <pre className="absolute bottom-5 mt-10 text-sm text-gray-400">Error: {error.message}</pre>
      )}
    </div>
  );
};
