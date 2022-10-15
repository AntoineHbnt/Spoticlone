import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { supabase } from '../../supabaseClient';
import { apiSpotify } from '../../utils/axios/axios';

export interface TopArtistsParams {
  limit?: number;
}

export const useTopArtists = (params: TopArtistsParams) => {
  return useQuery(queryKeys.topArtists(params), async () => {
    const { limit = 50 } = params;

    try {
      const response = await apiSpotify.get(`/me/top/artists?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${supabase.auth.session()!.provider_token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });
};
