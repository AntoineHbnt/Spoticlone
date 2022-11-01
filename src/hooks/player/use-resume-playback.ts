import { useMutation, useQuery } from '@tanstack/react-query';
import { resumePlayback } from '../../api/player';
import { playerKeys } from '../query-keys';

export const useResumePlayback = () => {
  const { mutateAsync, isLoading } = useMutation(
    playerKeys.resumePlayback(),
    () => resumePlayback(),
    {
      onSuccess: () => {
        console.log('Playback resumed');
      },
    }
  );
  return { mutateAsync, isLoading };
};
