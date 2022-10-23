import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../supabaseClient';
import { Album } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { Track } from '../../types/Track';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useAlbum = (id: string) => {
  return useQuery(queryKeys.album(id), async (): Promise<Album> => {
    const response = await apiSpotify.get(`/albums/${id}`);
    return response.data;
  });
};
