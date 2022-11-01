import { useMutation } from '@tanstack/react-query';
import { toggleShuffle } from '../../api/player';
import { playerKeys } from '../query-keys';

export const useToggleShuffle = (state: boolean) => {
  const { mutateAsync, isLoading } = useMutation(
    (playerKeys.toggleShuffle(state), () => toggleShuffle(state))
  );

  return { mutateAsync, isLoading };
};
