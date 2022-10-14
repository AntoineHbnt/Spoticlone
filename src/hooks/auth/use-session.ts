import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { queryKeys } from '../query-keys';

export const useSession = () => {
  return useQuery(queryKeys.session(), () => {
    const response = supabase.auth.session();

    return response;
  });
};
