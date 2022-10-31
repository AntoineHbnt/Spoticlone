import { useQuery } from '@tanstack/react-query';
import { getArtistTopTracks } from '../../api/artist';
import { Album } from '../../types/Album';
import { queryKeys } from '../query-keys';

export const useArtistTopTracks = (id?: string) => {
  return useQuery<Album[], Error>(queryKeys.aristTopTracks(id), () => getArtistTopTracks(id), {
    enabled: !!id,
  });
};
