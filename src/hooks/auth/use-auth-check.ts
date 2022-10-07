import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { supabase } from '../../supabaseClient';

export const useAuthCheck = () => {
  return useQuery(
    queryKeys.authCheck(),
    () => {
      const session = supabase.auth.session();
      return session !== null;
    },
    {
      staleTime: Infinity,
    }
  );
};
