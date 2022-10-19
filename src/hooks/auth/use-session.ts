import { Session } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { queryKeys } from '../query-keys';

export const useSession = () => {
  return useQuery(queryKeys.session(), async (): Promise<Session | null> => {
    const response = await supabase.auth.getSession();

    return response.data.session;
  });
};
