import { useMutation, useQuery } from '@tanstack/react-query';
import { toggleRepeat } from '../../api/player';
import { queryKeys } from '../query-keys';

export const useToggleRepeat = (state: 'off' | 'track' | 'context') => {
  const { mutateAsync, isLoading } = useMutation(
    (queryKeys.toggleRepeat(state), () => toggleRepeat(state))
  );

  return { mutateAsync, isLoading };
};
