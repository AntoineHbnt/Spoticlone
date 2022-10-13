import { useAuthCheck } from '../../hooks/auth/use-auth-check';

export const Protected = ({ redirectPath = '/login' }) => {
  const { data, status } = useAuthCheck();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (data?.authenticated) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};
