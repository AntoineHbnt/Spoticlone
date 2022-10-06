import { useAuthUser } from '../../hooks/auth/use-auth-user';
import { Avatar } from '../avatar/avatar';
import { Input } from '../forms/input/input';
import { Icon } from '../icon/icon';
import { IconSVG } from '../icon/icon';
import { signOut } from '../../utils/auth';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: user } = useAuthUser();
  const homeActive = location.pathname === '/';

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    value && navigate(`/search/${value}`);
  };

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
        onClick={() => signOut()}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background-base"
      >
        <Avatar src={user?.user_metadata.avatar_url} alt="avatar" />
      </button>
    </header>
  );
};
