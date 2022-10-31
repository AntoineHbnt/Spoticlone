import { PlayBackContext } from '../../context/playback-context';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useResumePlayback } from '../../hooks/player/use-resume-playback';
import { Icon, IconSVG } from '../icon/icon';

export const PlayerControl = () => {
  const playback = useContext(PlayBackContext);
  const isPlayingCondition: boolean = playback?.is_playing;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: resumePlayback } = useResumePlayback();
  const { mutateAsync: pausePlayback } = usePausePlayback();

  useEffect(() => {
    setIsPlaying(isPlayingCondition);
  }, [playback]);

  const handlePlay = async () => {
    if (isPlaying) {
      await pausePlayback();
    } else {
      await resumePlayback();
    }
  };

  return (
    <div className="flex h-full items-center">
      <button onClick={handlePlay} className="flex w-10 items-center justify-center">
        {isPlaying ? (
          <Icon width={24} fill="#fff" svg={IconSVG.Pause} />
        ) : (
          <Icon width={24} fill="#fff" svg={IconSVG.Play} />
        )}
      </button>
    </div>
  );
};
