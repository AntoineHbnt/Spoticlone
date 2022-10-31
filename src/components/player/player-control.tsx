import { PlayBackContext } from '../../context/playback-context';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useResumePlayback } from '../../hooks/player/use-resume-playback';
import { useSkipNext } from '../../hooks/player/use-skip-next';
import { useSkipPrevious } from '../../hooks/player/use-skip-previous';
import { durationParser } from '../../utils/misc/duration';
import { Icon, IconSVG } from '../icon/icon';

export interface PlayerControlProps {
  className?: string;
}

export const PlayerControl = (props: PlayerControlProps) => {
  const { className } = props;
  const playback = useContext(PlayBackContext);
  const isPlayingCondition: boolean = playback?.is_playing;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: resumePlayback } = useResumePlayback();
  const { mutateAsync: pausePlayback } = usePausePlayback();
  const { mutateAsync: skipNext } = useSkipNext();
  const { mutateAsync: skipPrevious } = useSkipPrevious();

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

  const handleNext = async () => {
    await skipNext();
  };

  const handlePrevious = async () => {
    await skipPrevious();
  };

  const progress = (playback?.progress_ms * 100) / playback?.item?.duration_ms;

  return (
    <div className={`player-control flex flex-col items-center justify-center ${className}`}>
      <div className="mb-2 flex items-center justify-center gap-4">
        <div className="flex items-end">
          <button onClick={handlePrevious} className="flex h-8 w-8 items-center justify-center">
            <Icon width={16} svg={IconSVG.SkipBack} className="fill-[#b3b3b3] hover:fill-white" />
          </button>
        </div>
        <button
          onClick={handlePlay}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white hover:scale-105"
        >
          {isPlaying ? (
            <Icon width={18} svg={IconSVG.Pause} />
          ) : (
            <Icon width={18} svg={IconSVG.Play} />
          )}
        </button>
        <div className="flex items-start">
          <button onClick={handleNext} className="flex h-8 w-8 items-center justify-center">
            <Icon
              width={16}
              svg={IconSVG.SkipForward}
              className="fill-[#b3b3b3] hover:fill-white"
            />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <span className="min-w-10 flex text-right text-xs">
          {durationParser(playback?.progress_ms)}
        </span>
        <div className="flex h-3 w-full items-center">
          <div className="progress-bar-background relative flex h-1 w-full rounded-full bg-[hsla(0,0%,100%,.3)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <div
                className=" progress-bar absolute h-full w-full rounded-full bg-white"
                style={{ transform: `translateX(${-100 + progress}%)` }}
              ></div>
            </div>
            <div
              className={`progress-pointer absolute top-[50%] z-50 -ml-1.5 hidden aspect-square h-3 -translate-y-[50%] rounded-full bg-white`}
              style={{ left: `${progress}%` }}
            />
          </div>
        </div>
        <span className="min-w-10 text-xs">{durationParser(playback?.item?.duration_ms)}</span>
      </div>
    </div>
  );
};
