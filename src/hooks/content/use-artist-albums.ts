import { useQuery } from '@tanstack/react-query';
import { getAlbumsByArtistId } from '../../api/album';
import { queryKeys } from '../query-keys';

export const useArtistAlbums = (id: string) => {
  return useQuery(queryKeys.artistAlbums(id), () => getAlbumsByArtistId(id), {
    enabled: !!id,
  });
};
