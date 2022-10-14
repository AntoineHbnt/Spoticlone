import { useSession } from '../../hooks/auth/use-session';
import { signOut } from '../../utils/auth';
import { Avatar } from '../avatar/avatar';
import { Input } from '../forms/input/input';
import { Icon } from '../icon/icon';
import { IconSVG } from '../icon/icon';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: session, status } = useSession();
  const homeActive = location.pathname === '/';

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    value && navigate(`/search/${value}`);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex w-full items-center justify-between pl-2">
      <Icon svg={IconSVG.Spotify} fill="#fff" width={32} />
      <div className="flex gap-4">
        <NavLink to="/">
          <Icon
            name={`home-5-${homeActive ? 'fill' : 'line'}`}
            className="ri-xl flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-base text-white"
          />
        </NavLink>
        <Input
          icon="search-line"
          onChange={handleSearch}
          placeholder="What do you want to listen to?"
        />
      </div>
      <button
        onClick={signOut}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background-base"
      >
        <Avatar src={session!.user!.user_metadata.avatar_url} alt="avatar" />
      </button>
    </header>
  );
};
