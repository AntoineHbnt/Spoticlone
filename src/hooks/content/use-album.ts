import { useQuery } from '@tanstack/react-query';
import { getAlbumById } from '../../api/album';
import { supabase } from '../../supabaseClient';
import { Album } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { Track } from '../../types/Track';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useAlbum = (id: string) => {
  return useQuery(queryKeys.album(id), () => getAlbumById(id), {
    enabled: !!id,
  });
};
