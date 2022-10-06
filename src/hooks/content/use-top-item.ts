import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import axios from 'axios';
import { supabase } from '../../supabaseClient';

export interface TopItemsParams {
  type: 'tracks' | 'artists';
  limit?: number;
}

export const useTopItems = (params: TopItemsParams) => {
  return useQuery(queryKeys.topItems(params), async () => {
    const { type, limit = 50 } = params;

    console.log(type);

    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};
