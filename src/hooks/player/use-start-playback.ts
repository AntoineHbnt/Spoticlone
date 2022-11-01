import { useMutation } from '@tanstack/react-query';
import { startAlbumPlayback, startArtistPlayback } from '../../api/player';
import { playerKeys } from '../query-keys';

export const useStartPlayback = (contextUri: string, offset: number, position_ms: number) => {
  const { mutateAsync, isLoading } = useMutation(
    playerKeys.startPlayback(contextUri, offset, position_ms),
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
