import { NavLink } from 'react-router-dom';
import { Icon, IconSVG } from '../icon/icon';

export interface NavItemProps {
  icon: IconSVG;
  label: string;
  path: string;
  activeIcon?: IconSVG;
}

export const NavItem = (props: NavItemProps) => {
  const { icon, activeIcon, label, path } = props;
  let location = useLocation();
  const active = location.pathname === path;

  console.log(activeIcon);

  return (
    <li
      className={`ease flex cursor-pointer gap-4 px-6 py-2 text-white transition duration-300 hover:opacity-100 ${
        active ? 'opacity-100' : 'opacity-70'
      }`}
    >
      <div className="h-6 w-6">
        {activeIcon && active ? (
          <Icon svg={activeIcon} fill="#fff" />
        ) : (
          <Icon svg={icon} fill="#fff" />
        )}
      </div>
      <div className="flex-1">
        <NavLink to={path} className="text-sm font-bold">
          {label}
        </NavLink>
      </div>
    </li>
  );
};
