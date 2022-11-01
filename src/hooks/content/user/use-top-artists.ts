import { useQuery } from '@tanstack/react-query';
import { queryKeys, userKeys } from '../../query-keys';
import { apiSpotify } from '../../../utils/axios/axios';
import { Paging } from '../../../types/Paging';
import { Artist } from '../../../types/Artist';
import { getUserTopArtists } from '../../../api/user';

export const useTopArtists = (limit?: number) => {
  return useQuery(
    userKeys.topArtists(limit),
    async (): Promise<Paging<Artist>> => getUserTopArtists(limit)
  );
};
