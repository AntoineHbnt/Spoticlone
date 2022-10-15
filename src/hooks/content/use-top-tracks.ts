import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export interface TopTracksParams {
  limit?: number;
}

export const useTopTracks = (params: TopTracksParams) => {
  return useQuery(queryKeys.topTracks(params), async () => {
    const { limit = 50 } = params;

    try {
      const response = await apiSpotify.get(`/me/top/tracks?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${supabase.auth.session()!.provider_token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};
