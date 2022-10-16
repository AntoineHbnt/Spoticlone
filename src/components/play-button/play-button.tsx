import axios from 'axios';
import { PlayBackContext } from '../../context/PlaybackContext';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useStartPlayback } from '../../hooks/player/use-start-playback';
import { Icon } from '../icon/icon';
import { IconSVG } from '../icon/icon';

export interface PlayButtonProps {
  className?: string;
  iconWidth?: number;
  itemData: any;
}

export const PlayButton = (props: PlayButtonProps) => {
  const { className, iconWidth = 24, itemData } = props;
  const playback = useContext(PlayBackContext);
  const itemUri: string = itemData.type === 'track' ? itemData.album.uri : itemData.uri;
  const isPlayingCondition: boolean = playback?.is_playing && playback?.context?.uri === itemUri;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: startPlayback } = useStartPlayback(itemUri, itemData.track_number - 1, 0);

  const { mutateAsync: pausePlayback } = usePausePlayback();

  useEffect(() => {
    setIsPlaying(isPlayingCondition);
  }, [playback]);

  return (
    <button
      onClick={() => (isPlaying ? pausePlayback() : startPlayback())}
      className={`flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bg-spotify-green drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] ${className}`}
    >
      {isPlaying ? (
        <Icon svg={IconSVG.Pause} fill="#000" width={iconWidth} />
      ) : (
        <Icon svg={IconSVG.Play} fill="#000" width={iconWidth} />
      )}
    </button>
  );
};
