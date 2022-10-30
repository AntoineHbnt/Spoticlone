import { mainNavigation } from '../../navigation';
import { Icon } from '../icon/icon';

export const MobileNavigation = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <div className="h-[80px] w-full">
      <ul className="mt-3 flex w-full items-center justify-center">
        {mainNavigation.map((item) => (
          <li className="flex h-[70px] w-[25%] justify-center">
            <NavLink to={item.path} className="flex flex-col items-center gap-1 py-2">
              <div className="h-6 w-6">
                {pathname === item.path ? (
                  <Icon svg={item.activeIcon} fill="#fff" />
                ) : (
                  <Icon svg={item.icon} fill="#fff" />
                )}
              </div>
              <div className="flex-1 text-xs  text-white">{item.label}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
