import { useMutation } from '@tanstack/react-query';
import { apiSpotify } from '../../utils/axios/axios';
import { playerKeys } from '../query-keys';

export const usePausePlayback = () => {
  const { mutateAsync, isLoading } = useMutation(
    playerKeys.pausePlayback(),
    () => apiSpotify.put('/me/player/pause'),
    {
      onSuccess: () => {
        console.log('Playback paused');
      },
    }
  );
  return { mutateAsync, isLoading };
};
