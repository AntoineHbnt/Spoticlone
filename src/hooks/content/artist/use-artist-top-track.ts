import { useQuery } from '@tanstack/react-query';
import { getArtistTopTracks } from '../../../api/artist';
import { Album } from '../../../types/Album';
import { artistKeys } from '../../query-keys';

export const useArtistTopTracks = (id?: string) => {
  return useQuery<Album[], Error>(artistKeys.aristTopTracks(id), () => getArtistTopTracks(id), {
    enabled: !!id,
  });
};
