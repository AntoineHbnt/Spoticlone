import { mainNavigation, secondNavigation } from '../../navigation';
import { Icon, IconSVG } from '../icon/icon';
import { NavItem } from './nav-item';

export const Sidebar = () => {
  return (
    <div className="h-full w-full bg-black pt-6">
      <NavLink to="/">
        <Icon svg={IconSVG.SpotifyBanner} className="mb-4 px-6" height={40} fill="#fff" />
      </NavLink>
      <nav className="flex flex-col  px-6">
        <ul className="mt-3">
          {mainNavigation.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              activeIcon={item.activeIcon}
            />
          ))}
        </ul>
        <div className="mt-6 flex flex-col">
          <ul>
            {secondNavigation.map((item) => (
              <NavItem key={item.path} icon={item.icon} label={item.label} path={item.path} />
            ))}
          </ul>
          <hr className="my-2 border-[#282828]" />
        </div>
      </nav>
    </div>
  );
};
