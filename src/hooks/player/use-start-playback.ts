import { useMutation } from '@tanstack/react-query';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useStartPlayback = (contextUri: string, offset: number, position_ms: number) => {
  const { mutateAsync, isLoading } = useMutation(
    queryKeys.startPlayback(contextUri, offset, position_ms),
    () =>
      apiSpotify.put('/me/player/play', {
        context_uri: contextUri,
        offset: {
          position: offset,
        },
        position_ms: position_ms,
      }),
    {
      onSuccess: () => {
        console.log('Playback started');
      },
    }
  );
  return { mutateAsync, isLoading };
};
