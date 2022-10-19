import { Session } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { queryKeys } from '../query-keys';

export const useSession = () => {
  return useQuery(queryKeys.session(), async (): Promise<Session | null> => {
    const storage = localStorage.getItem(`sb-${import.meta.env.VITE_SUPABASE_REF_ID}-auth-token`);
    const session = (storage && JSON.parse(storage)) || null;

    return session;
  });
};
