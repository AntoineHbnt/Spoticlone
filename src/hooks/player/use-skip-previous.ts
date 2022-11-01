import { useMutation } from '@tanstack/react-query';
import { skipPrevious } from '../../api/player';
import { playerKeys } from '../query-keys';

export const useSkipPrevious = () => {
  const { mutateAsync, isLoading } = useMutation(playerKeys.skipPrevious(), () => skipPrevious(), {
    onSuccess: () => {
      console.log('Skip previous');
    },
  });
  return { mutateAsync, isLoading };
};
