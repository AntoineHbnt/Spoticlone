import { PlayBackContext } from '../../../context/playback-context';
import { PlaybackBar } from './playback-bar';
import { PlayerControlButton } from './player-control-buttons';

export interface PlayerControlProps {
  className?: string;
}

export const PlayerControl = (props: PlayerControlProps) => {
  const { className } = props;
  const playback = useContext(PlayBackContext);

  if (!playback) return null;

  return (
    <div className={`player-control flex flex-col items-center justify-center ${className}`}>
      <PlayerControlButton playback={playback!} />
      <PlaybackBar playback={playback!} />
    </div>
  );
};
