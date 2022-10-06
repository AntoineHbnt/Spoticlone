import { Icon, IconSVG } from '../icon/icon';
import { NavItem, NavItemProps } from './nav-item';

export interface NavbarProps {
  navigation: NavItemProps[];
}

export const Sidebar = (props: NavbarProps) => {
  const { navigation } = props;

  return (
    <nav className="flex h-full w-full flex-col rounded-md bg-background-base px-6">
      <ul className="mt-3">
        {navigation.map((item) => (
          <NavItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            activeIcon={item.activeIcon}
          />
        ))}
      </ul>
      <hr className="my-2 border-[#282828]" />
    </nav>
  );
};