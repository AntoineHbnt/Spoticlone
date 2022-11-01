import { PlayBackContext } from '../../../context/playback-context';
import { usePausePlayback } from '../../../hooks/player/use-pause-playback';
import { useResumePlayback } from '../../../hooks/player/use-resume-playback';
import { useSkipNext } from '../../../hooks/player/use-skip-next';
import { useSkipPrevious } from '../../../hooks/player/use-skip-previous';
import { useToggleRepeat } from '../../../hooks/player/use-toggle-repeat';
import { useToggleShuffle } from '../../../hooks/player/use-toggle-shuffle';

const chooseRepeatState = (state: 'off' | 'track' | 'context'): 'off' | 'track' | 'context' => {
  switch (state) {
    case 'context':
      return 'track';
    case 'track':
      return 'off';
    case 'off':
      return 'context';
    default:
      return 'off';
  }
};

export const usePlayerButtonData = (playback: SpotifyApi.CurrentPlaybackResponse) => {
  const { shuffle_state, repeat_state } = playback;

  const resumePlayback = useResumePlayback();
  const pausePlayback = usePausePlayback();
  const skipNext = useSkipNext();
  const skipPrevious = useSkipPrevious();
  const toggleShuffle = useToggleShuffle(!shuffle_state);
  const toggleRepeat = useToggleRepeat(chooseRepeatState(repeat_state));

  return {
    resumePlayback: resumePlayback.mutateAsync,
    pausePlayback: pausePlayback.mutateAsync,
    skipNext: skipNext.mutateAsync,
    skipPrevious: skipPrevious.mutateAsync,
    toggleShuffle: toggleShuffle.mutateAsync,
    toggleRepeat: toggleRepeat.mutateAsync,

    isLoading:
      resumePlayback.isLoading ||
      pausePlayback.isLoading ||
      skipNext.isLoading ||
      skipPrevious.isLoading,
  };
};
