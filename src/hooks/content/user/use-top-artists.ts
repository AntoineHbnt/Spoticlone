import { useQuery } from '@tanstack/react-query';
import { userKeys } from '../../query-keys';
import { Paging } from '../../../types/Paging';
import { Artist } from '../../../types/Artist';
import { getUserTopArtists } from '../../../api/user';

export const useTopArtists = (limit?: number) => {
  return useQuery<Paging<Artist>, Error>(
    userKeys.topArtists(limit),
    async (): Promise<Paging<Artist>> => getUserTopArtists(limit)
  );
};
