import ReactSlider from 'react-slider';
import { useSeekPosition } from '../../../hooks/player/use-seek-position';
import { durationParser } from '../../../utils/misc/duration';

export interface PlaybackBarProps {
  playback: SpotifyApi.CurrentPlaybackResponse;
}

export const PlaybackBar = (props: PlaybackBarProps) => {
  const { playback } = props;
  const [position, setPosition] = useState(playback.progress_ms!);
  const { mutateAsync: seekPosition } = useSeekPosition(position);

  useEffect(() => {
    seekPosition();
  }, [position]);

  return (
    <div className="flex w-full items-center gap-2">
      <span className="min-w-10 flex text-right text-xs">
        {durationParser(playback.progress_ms!)}
      </span>
      <ReactSlider
        className="player-control flex h-3 w-full items-center overflow-hidden rounded-full"
        thumbClassName="progress-pointer hidden aspect-square h-3 rounded-full bg-white"
        trackClassName="overflow-hidden  flex h-1 w-full rounded-full bg-[hsla(0,0%,100%,.3)] progress-bar-background"
        value={playback.progress_ms!}
        min={0}
        max={playback.item?.duration_ms!}
        onAfterChange={(value) => setPosition(value as number)}
      />
      <span className="min-w-10 text-xs">{durationParser(playback.item?.duration_ms!)}</span>
    </div>
  );
};
