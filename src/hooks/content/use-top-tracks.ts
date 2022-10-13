import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { apiSpotify } from '../../utils/axios';

export interface TopTracksParams {
  limit?: number;
}

export const useTopTracks = (params: TopTracksParams) => {
  return useQuery(queryKeys.topTracks(params), async () => {
    const { limit = 50 } = params;

    try {
      const response = await apiSpotify.get(
        `https://api.spotify.com/v1/me/top/tracks?limit=${limit}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};
