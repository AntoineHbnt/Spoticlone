import { useSession } from '../../hooks/auth/use-session';
import { signOut } from '../../utils/auth';
import { Avatar } from '../avatar/avatar';
import { Input } from '../forms/input/input';
import { Icon, IconSVG } from '../icon/icon';
import { Tooltip } from '../tooltip/Tooltip';

export const Header = () => {
  const navigate = useNavigate();
  const { data: session, status } = useSession();
  const element = useRef<HTMLElement>(null);
  const path = useLocation().pathname;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    value && navigate(`/search/${value}`);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  interface ButtonProps {
    icon: IconSVG;
    tooltip: string;
    onClick: () => void;
  }

  const Button = (props: ButtonProps) => (
    <Tooltip content={props.tooltip}>
      <button
        onClick={props.onClick}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,.7)]"
      >
        <Icon width={20} svg={props.icon} fill="#fff" />
      </button>
    </Tooltip>
  );

  return (
    <header
      ref={element}
      className={`sticky inset-0 z-10 hidden h-fit w-full items-center justify-between bg-background-base/80 px-6 py-2 backdrop-blur md:flex`}
    >
      <div className="flex h-12 items-center gap-4">
        <div className="flex gap-4">
          <Button icon={IconSVG.NavigateBack} tooltip="Go back" onClick={() => navigate(-1)} />
          <Button
            icon={IconSVG.NavigateForwards}
            tooltip="Go forwards"
            onClick={() => navigate(1)}
          />
        </div>
        {path.includes('search') && (
          <Input
            className="h-full bg-white"
            icon="search-line"
            onChange={handleSearch}
            placeholder="What do you want to listen to?"
          />
        )}
      </div>
      <Avatar />
    </header>
  );
};
