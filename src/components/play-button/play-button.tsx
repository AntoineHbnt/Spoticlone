import { PlayBackContext } from '../../context/PlaybackContext';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useStartPlayback } from '../../hooks/player/use-start-playback';
import { Album } from '../../types/Album';
import { Track } from '../../types/Track';
import { Icon } from '../icon/icon';
import { IconSVG } from '../icon/icon';

export interface PlayButtonProps {
  className?: string;
  iconWidth?: number;
  width?: number;
  uri: string;
  offset?: number;
}

export const PlayButton = (props: PlayButtonProps) => {
  const { className, iconWidth = 24, offset = 0, uri, width = 48 } = props;
  const playback = useContext(PlayBackContext);
  const isPlayingCondition: boolean = playback?.is_playing && playback?.context?.uri === uri;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: startPlayback } = useStartPlayback(uri, offset, 0);
  const { mutateAsync: pausePlayback } = usePausePlayback();

  useEffect(() => {
    setIsPlaying(isPlayingCondition);
  }, [playback]);

  return (
    <button
      onClick={() => (isPlaying ? pausePlayback() : startPlayback())}
      style={{ width: `${width}px` }}
      className={`flex aspect-square shrink-0 cursor-default items-center justify-center rounded-full bg-spotify-green drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] ${className}`}
    >
      {isPlaying ? (
        <Icon svg={IconSVG.Pause} fill="#000" width={iconWidth} />
      ) : (
        <Icon svg={IconSVG.Play} fill="#000" width={iconWidth} />
      )}
    </button>
  );
};
