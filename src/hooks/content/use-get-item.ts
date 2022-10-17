import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { Album } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { Track } from '../../types/Track';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useGetItem = (id: string, type: string) => {
  return useQuery(queryKeys.getItem(id, type), async (): Promise<Album | Artist | Track> => {
    const response = await apiSpotify.get(`/${type}s/${id}`, {
      headers: {
        Authorization: `Bearer ${supabase.auth.session()!.provider_token}`,
      },
    });
    return response.data;
  });
};
