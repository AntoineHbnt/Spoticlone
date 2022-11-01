import { useQuery } from '@tanstack/react-query';
import { getAlbumById } from '../../../api/album';
import { Album } from '../../../types/Album';
import { albumKeys } from '../../query-keys';

export const useAlbum = (id: string) => {
  return useQuery<Album, Error>(albumKeys.album(id), async (): Promise<Album> => getAlbumById(id), {
    retry: 0,
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};
