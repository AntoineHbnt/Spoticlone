import { useQuery } from '@tanstack/react-query';
import { getArtistSingles } from '../../api/artist';
import { queryKeys } from '../query-keys';

export const useArtistSingles = (id?: string) => {
  return useQuery(queryKeys.artistSingles(id), () => getArtistSingles(id), {
    enabled: !!id,
  });
};
