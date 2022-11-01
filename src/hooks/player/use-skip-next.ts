import { useMutation } from '@tanstack/react-query';
import { skipNext } from '../../api/player';
import { playerKeys } from '../query-keys';

export const useSkipNext = () => {
  const { mutateAsync, isLoading } = useMutation(playerKeys.skipNext(), () => skipNext(), {
    onSuccess: () => {
      console.log('Skip next');
    },
  });
  return { mutateAsync, isLoading };
};
