import { useMutation, useQuery } from '@tanstack/react-query';
import { resumePlayback } from '../../api/player';
import { queryKeys } from '../query-keys';

export const useResumePlayback = () => {
  const { mutateAsync, isLoading } = useMutation(
    queryKeys.resumePlayback(),
    () => resumePlayback(),
    {
      onSuccess: () => {
        console.log('Playback resumed');
      },
    }
  );
  return { mutateAsync, isLoading };
};
