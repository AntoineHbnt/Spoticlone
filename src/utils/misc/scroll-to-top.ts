import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.querySelector('main')!.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}
