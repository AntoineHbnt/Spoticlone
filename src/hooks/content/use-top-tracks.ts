import { useQuery } from '@tanstack/react-query';
import { Paging } from '../../types/Paging';
import { Track } from '../../types/Track';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export interface TopTracksParams {
  limit?: number;
}

export const useTopTracks = (params: TopTracksParams) => {
  return useQuery(queryKeys.topTracks(params), async (): Promise<Paging<Track>> => {
    const { limit = 50 } = params;

    const response = await apiSpotify.get(`/me/top/tracks?limit=${limit}`);

    return response.data;
  });
};
