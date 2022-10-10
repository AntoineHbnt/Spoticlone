import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { supabase } from '../../supabaseClient';
import { queryKeys } from '../query-keys';

export const useGetItem = (id: string, type: string) => {
  return useQuery(queryKeys.getItem(id, type), async () => {
    try {
      const { data } = await axios.get(`https://api.spotify.com/v1/${type}s/${id}`, {
        headers: {
          Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (err) {
      return err;
    }
  });
};
