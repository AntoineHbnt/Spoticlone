import { useQuery } from '@tanstack/react-query';
import { getAlbumById } from '../../api/album';
import { Album } from '../../types/Album';
import { queryKeys } from '../query-keys';

export const useAlbum = (id: string) => {
  return useQuery(queryKeys.album(id), (): Promise<Album> => getAlbumById(id), {
    enabled: !!id,
  });
};
