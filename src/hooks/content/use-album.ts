import { useQuery } from '@tanstack/react-query';
import { getAlbumById } from '../../api/album';
import { queryKeys } from '../query-keys';

export const useAlbum = (id: string) => {
  return useQuery(queryKeys.album(id), () => getAlbumById(id), {
    enabled: !!id,
  });
};
