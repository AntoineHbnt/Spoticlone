import { useMutation } from '@tanstack/react-query';
import { skipPrevious } from '../../api/player';
import { queryKeys } from '../query-keys';

export const useSkipPrevious = () => {
  const { mutateAsync, isLoading } = useMutation(queryKeys.skipPrevious(), () => skipPrevious(), {
    onSuccess: () => {
      console.log('Skip previous');
    },
  });
  return { mutateAsync, isLoading };
};
