import { useSession } from '../../hooks/auth/use-session';

export const Protected = ({ redirectPath = '/login' }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return session?.provider_token ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
