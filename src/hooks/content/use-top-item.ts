import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import axios from 'axios';
import { supabase } from '../../supabaseClient';

export interface TopItemsParams {
  type: 'tracks' | 'artists';
}

export const useTopItems = (params: TopItemsParams) => {
  return useQuery(queryKeys.topItems(params), async () => {
    const response = await axios.get(`https://api.spotify.com/v1/me/top/${params.type}`, {
      headers: {
        Authorization: `Bearer ${supabase.auth.session()?.access_token})}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  });
};
