import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useGetItem = (id: string, type: string) => {
  return useQuery(queryKeys.getItem(id, type), async () => {
    try {
      const response = await apiSpotify.get(`/${type}s/${id}`, {
        headers: {
          Authorization: `Bearer ${supabase.auth.session()!.provider_token}`,
        },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  });
};
