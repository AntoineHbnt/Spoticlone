import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { supabase } from '../../supabaseClient';
import { apiClient } from '../../utils/axios/axios';
import { AuthCheckSchema } from '../../types/schema/auth';

export const useAuthCheck = () => {
  return useQuery(
    queryKeys.authCheck(),
    async () => {
      const response = await apiClient.get('/auth/check');

      return AuthCheckSchema.parse(response.data);
    },
    {
      staleTime: Infinity,
    }
  );
};
