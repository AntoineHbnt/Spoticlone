import { useMutation } from '@tanstack/react-query';
import { skipNext } from '../../api/player';
import { queryKeys } from '../query-keys';

export const useSkipNext = () => {
  const { mutateAsync, isLoading } = useMutation(queryKeys.skipNext(), () => skipNext(), {
    onSuccess: () => {
      console.log('Skip next');
    },
  });
  return { mutateAsync, isLoading };
};
