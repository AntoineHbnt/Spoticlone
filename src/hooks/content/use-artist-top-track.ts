import { useQuery } from '@tanstack/react-query';
import { getArtistTopTracks } from '../../api/artist';
import { queryKeys } from '../query-keys';

export const useArtistTopTracks = (id: string) => {
  return useQuery(queryKeys.aristTopTracks(id), () => getArtistTopTracks(id), {
    enabled: !!id,
  });
};
