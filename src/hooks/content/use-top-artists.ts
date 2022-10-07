import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import axios from 'axios';
import { supabase } from '../../supabaseClient';

export interface TopArtistsParams {
  limit?: number;
}

export const useTopArtists = (params: TopArtistsParams) => {
  const { data } = useQuery(queryKeys.topArtists(params), async () => {
    const { limit = 50 } = params;

    try {
      const { data } = await axios.get(`https://api.spotify.com/v1/me/top/artists?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
          'Content-Type': 'application/json',
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });

  return data;
};
