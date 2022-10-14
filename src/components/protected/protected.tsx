import { useSession } from '../../hooks/auth/use-session';

export const Protected = ({ redirectPath = '/login' }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};
