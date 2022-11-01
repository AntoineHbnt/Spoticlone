import { PlayBackContext } from '../../context/playback-context';
import { useVibrant } from '../../hooks/misc/use-vibrant';
import { PlayerControl } from './player-control';
import { PlayerInfo } from './player-info';

export const MobilePlayer = () => {
  const playback = useContext(PlayBackContext);
  const { data: color } = useVibrant(
    (playback?.item as SpotifyApi.TrackObjectFull)?.album.images[0].url
  );

  if (!playback) return null;

  return (
    <div
      className="mx-2 flex h-14 w-[calc(100%_-_16px)] justify-between rounded p-2"
      style={{ backgroundColor: color }}
    >
      <PlayerInfo />
      <PlayerControl />
    </div>
  );
};
