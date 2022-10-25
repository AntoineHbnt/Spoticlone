import { useQuery } from '@tanstack/react-query';
import { AlbumSimplified } from '../../types/Album';
import { Paging } from '../../types/Paging';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useArtistAlbums = (id: string) => {
  return useQuery(
    queryKeys.artistAlbums(id),
    async (): Promise<Paging<AlbumSimplified>> => {
      const response = await apiSpotify.get(`/artists/${id}/albums`);

      return response.data;
    },
    {
      enabled: !!id,
    }
  );
};
