import { useAuthCheck } from '../../hooks/auth/use-auth-check';
import { supabase } from '../../supabaseClient';
import { getUser } from '../../utils/auth';

export const Protected = ({ redirectPath = '/login' }) => {
  const { data: authCheck, status } = useAuthCheck();

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  return authCheck ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
