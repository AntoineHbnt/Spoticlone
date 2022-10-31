import { useQuery } from '@tanstack/react-query';
import { getArtistById } from '../../api/artist';
import { Artist } from '../../types/Artist';
import { queryKeys } from '../query-keys';

export const useArtist = (id: string) => {
  return useQuery<Artist, Error>(
    queryKeys.artist(id),
    async (): Promise<Artist> => getArtistById(id),
    {
      retry: 0,
    }
  );
};
