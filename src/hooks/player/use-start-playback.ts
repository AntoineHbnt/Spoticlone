import { useMutation } from '@tanstack/react-query';
import { startAlbumPlayback, startArtistPlayback } from '../../api/player';
import { apiSpotify } from '../../utils/axios/axios';
import { queryKeys } from '../query-keys';

export const useStartPlayback = (contextUri: string, offset: number, position_ms: number) => {
  const { mutateAsync, isLoading } = useMutation(
    queryKeys.startPlayback(contextUri, offset, position_ms),
    () =>
      contextUri.includes('album')
        ? startAlbumPlayback(contextUri, offset, position_ms)
        : startArtistPlayback(contextUri),

    {
      onSuccess: () => {
        console.log('Playback started');
      },
    }
  );
  return { mutateAsync, isLoading };
};
