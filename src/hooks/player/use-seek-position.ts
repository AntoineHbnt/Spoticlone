import { useMutation } from '@tanstack/react-query';
import { seekPostion } from '../../api/player';
import { queryKeys } from '../query-keys';

export const useSeekPosition = (positionMs: number) => {
  const { mutateAsync, isLoading } = useMutation(
    queryKeys.seekPostion(positionMs),
    () => seekPostion(positionMs),
    {
      onSuccess: () => {
        console.log(`Playback seek to position : ${positionMs}ms`);
      },
    }
  );
  return { mutateAsync, isLoading };
};
