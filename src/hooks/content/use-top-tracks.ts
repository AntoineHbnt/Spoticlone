import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import axios from 'axios';
import { supabase } from '../../supabaseClient';

export interface TopTracksParams {
  limit?: number;
}

export const useTopTracks = (params: TopTracksParams) => {
  return useQuery(queryKeys.topTracks(params), async () => {
    const { limit = 50 } = params;

    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}`, {
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
