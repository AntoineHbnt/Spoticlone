import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { apiSpotify } from '../../utils/axios';

export interface TopArtistsParams {
  limit?: number;
}

export const useTopArtists = (params: TopArtistsParams) => {
  return useQuery(queryKeys.topArtists(params), async () => {
    const { limit = 50 } = params;

    try {
      const response = await apiSpotify.get(
        `https://api.spotify.com/v1/me/top/artists?limit=${limit}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });
};
