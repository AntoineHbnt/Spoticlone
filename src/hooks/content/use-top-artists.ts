import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../query-keys';
import { apiSpotify } from '../../utils/axios/axios';
import { Paging } from '../../types/Paging';
import { Artist } from '../../types/Artist';

export interface TopArtistsParams {
  limit?: number;
}

export const useTopArtists = (params: TopArtistsParams) => {
  return useQuery(queryKeys.topArtists(params), async (): Promise<Paging<Artist>> => {
    const { limit = 50 } = params;
    const response = await apiSpotify.get(`/me/top/artists?limit=${limit}`);

    return response.data;
  });
};
