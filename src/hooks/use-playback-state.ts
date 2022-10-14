import { useQuery } from '@tanstack/react-query';
import { apiSPotify } from '../utils/axios';
import { queryKeys } from './query-keys';

export const usePlaybackState = () => {
  return useQuery(queryKeys.playbackState(), async () => {
    const response = await apiSPotify.get('/me/player');

    return response.data;
  });
};
