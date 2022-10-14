import { useQuery } from '@tanstack/react-query';
import { apiSpotify } from '../../utils/axios';
import { queryKeys } from '../query-keys';

export const useGetItem = (id: string, type: string) => {
  return useQuery(queryKeys.getItem(id, type), async () => {
    try {
      const response = await apiSpotify.get(`https://api.spotify.com/v1/${type}s/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  });
};
