import { useState, useContext, useEffect } from 'react';
import { PlayBackContext } from '../../context/PlaybackContext';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useStartPlayback } from '../../hooks/player/use-start-playback';
import { Track } from '../../types/Track';
import { durationParser } from '../../utils/misc/duration';
import { Icon } from '../icon/icon';
import { ExplicitIcon } from '../icon/icons/explicit';
import { Thumbnail } from '../thumbnail/thumbnail';
import './tracklist-row.styles.scss';

export interface TrackListRowProps {
  track: Track;
}

export const TrackListRow = (props: TrackListRowProps) => {
  const { track } = props;
  const playback = useContext(PlayBackContext);
  const itemUri: string = track.album.uri;
  const isPlayingCondition: boolean = playback?.is_playing && playback?.context?.uri === itemUri;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: startPlayback } = useStartPlayback(itemUri, track.track_number - 1, 0);
  const { mutateAsync: pausePlayback } = usePausePlayback();

  useEffect(() => {
    setIsPlaying(isPlayingCondition);
  }, [playback]);

  return (
    <div
      className={`trackListRow flex w-full items-center justify-between rounded p-2 pr-4 ${
        isPlaying && 'active'
      }`}
    >
      <div className="flex items-center">
        <div className="relative h-10 w-10 shrink-0">
          <Thumbnail src={track.album.images[0].url} alt={track.album.name} />
          <button
            onClick={() => (isPlaying ? pausePlayback() : startPlayback())}
            className="absolute inset-0 z-10 flex h-full w-full items-center justify-center opacity-0"
          >
            <Icon name={`${isPlaying ? 'pause-fill' : 'play-fill'}  text-xl text-white`} />
          </button>
        </div>
        <div className="ml-4">
          <p
            className={`text-base ${isPlaying ? 'text-spotify-green' : 'text-white'} line-clamp-1`}
          >
            {track.name}
          </p>
          <div className="flex items-center">
            {track.explicit && <ExplicitIcon className="mr-2" />}
            <p className="text-sm text-gray-400 line-clamp-1">
              {track.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-sm text-gray-400">{durationParser(track.duration_ms)}</p>
      </div>
    </div>
  );
};
