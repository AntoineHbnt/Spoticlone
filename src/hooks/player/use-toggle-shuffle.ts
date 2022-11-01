import { useMutation } from '@tanstack/react-query';
import { toggleShuffle } from '../../api/player';
import { queryKeys } from '../query-keys';

export const useToggleShuffle = (state: boolean) => {
  const { mutateAsync, isLoading } = useMutation(
    (queryKeys.toggleShuffle(state), () => toggleShuffle(state))
  );

  return { mutateAsync, isLoading };
};
