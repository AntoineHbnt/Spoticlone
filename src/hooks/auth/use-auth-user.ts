import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { supabase } from '../../supabaseClient';

export const useAuthUser = () => {
  return useQuery(
    queryKeys.authUser(),
    () => {
      const currentUser = supabase.auth.user();

      return currentUser;
    },
    {
      staleTime: Infinity,
    }
  );
};
