import { useQuery } from '@tanstack/react-query';
import { getArtistById } from '../../../api/artist';
import { Artist } from '../../../types/Artist';
import { artistKeys } from '../../query-keys';

export const useArtist = (id?: string) => {
  return useQuery<Artist, Error>(
    artistKeys.artist(id),
    async (): Promise<Artist> => getArtistById(id),
    {
      enabled: !!id,
      retry: 0,
    }
  );
};
