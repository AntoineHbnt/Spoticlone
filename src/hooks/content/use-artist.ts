import { useQuery } from '@tanstack/react-query';
import { Artist } from '../../types/Artist';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useArtist = (id: string) => {
  return useQuery(queryKeys.artist(id), async (): Promise<Artist> => {
    const response = await apiSpotify.get(`/artists/${id}`);

    return response.data;
  });
};
