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
  const ref = useRef<HTMLElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    value && navigate(`/search/${value}`);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <header
      ref={ref}
      className="absolute inset-0 z-10 flex h-fit w-full items-center justify-between p-4"
    >
      <div className="flex h-12 gap-4">
        <Input
          icon="search-line"
          onChange={handleSearch}
          placeholder="What do you want to listen to?"
        />
      </div>
      <button
        onClick={signOut}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-background-base hover:bg-[#282828]"
      >
        <Avatar src={session!.user!.user_metadata.avatar_url} size={28} alt="avatar" />
      </button>
    </header>
  );
};
