import { useMutation } from '@tanstack/react-query';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const usePausePlayback = () => {
  const { mutateAsync, isLoading } = useMutation(
    queryKeys.pausePlayback(),
    () => apiSpotify.put('/me/player/pause'),
    {
      onSuccess: () => {
        console.log('Playback paused');
      },
    }
  );
  return { mutateAsync, isLoading };
};
