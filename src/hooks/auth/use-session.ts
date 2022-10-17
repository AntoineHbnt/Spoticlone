import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { queryKeys } from '../query-keys';
import { Session } from '@supabase/gotrue-js';

export const useSession = () => {
  return useQuery(queryKeys.session(), (): Session | null => {
    const response = supabase.auth.session();

    return response;
  });
};
