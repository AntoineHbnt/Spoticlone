import { useMutation } from '@tanstack/react-query';
import { toggleRepeat } from '../../api/player';
import { playerKeys } from '../query-keys';

export const useToggleRepeat = (state: 'off' | 'track' | 'context') => {
  const { mutateAsync, isLoading } = useMutation(
    (playerKeys.toggleRepeat(state),
    () => toggleRepeat(state),
    {
      onSuccess: () => {
        console.log('Playback started');
      },
    })
  );

  return { mutateAsync, isLoading };
};
