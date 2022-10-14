import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { supabase } from '../../supabaseClient';
import { apiClient } from '../../utils/axios/axios';
import { AuthUserSchema } from '../../types/schema/auth';

export function useAuthUser() {
  return useQuery(
    queryKeys.authUser(),
    async () => {
      const response = await apiClient.get('/me');

      return AuthUserSchema.parse(response.data);
    },
    {
      staleTime: Infinity,
    }
  );
}
