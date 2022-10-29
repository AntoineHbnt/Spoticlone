import { useState, useContext, useEffect } from 'react';
import { PlayBackContext } from '../../context/PlaybackContext';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useStartPlayback } from '../../hooks/player/use-start-playback';
import { Track } from '../../types/Track';
import { durationParser } from '../../utils/misc/duration';
import { Icon } from '../icon/icon';
import { ExplicitIcon } from '../icon/icons/explicit';
import { Thumbnail } from '../thumbnail/thumbnail';
import trackPlayingGif from '../../assets/track-playing.gif';
import './tracklist-row.styles.scss';

export interface TrackListRowProps {
  track: Track;
  index?: number;
  thumbnail?: boolean;
  artist?: boolean;
}

export const TrackListRow = (props: TrackListRowProps) => {
  const { artist = true, track, thumbnail = true, index = 0 } = props;

  const playback = useContext(PlayBackContext);
  const uri: string = track.album.uri;
  const isPlayingCondition: boolean = playback?.is_playing && playback?.item?.id === track.id;
  const showIndex: boolean = index !== 0;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: startPlayback } = useStartPlayback(uri, track.track_number - 1, 0);
  const { mutateAsync: pausePlayback } = usePausePlayback();

  useEffect(() => {
    setIsPlaying(isPlayingCondition);
  }, [playback]);

  return (
    <div className={`trackListRow flex w-full items-center justify-between rounded p-2 pr-4`}>
      <div className="flex items-center">
        <div className="relative flex h-10 shrink-0 items-center justify-center">
          {showIndex && (
            <div className="relative  flex w-12 items-center justify-center">
              {isPlaying ? (
                <img src={trackPlayingGif} width="14" height="14" alt="playing song" />
              ) : (
                <span className="index text-[#b3b3b3]">{index}</span>
              )}

              <button
                onClick={() => (isPlaying ? pausePlayback() : startPlayback())}
                className="index-button absolute inset-0 z-10 flex h-full w-full items-center justify-center opacity-0"
              >
                <Icon name={`${isPlaying ? 'pause-fill' : 'play-fill'}  text-xl text-white`} />
              </button>
            </div>
          )}
          {thumbnail && (
            <div className="thumbnail">
              <Thumbnail className="w-10" src={track.album.images[0].url} alt={track.album.name} />
              {!showIndex && (
                <button
                  onClick={() => (isPlaying ? pausePlayback() : startPlayback())}
                  className="thumbnail-button absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-[rgb(0,0,0,0.5)] opacity-0"
                >
                  <Icon name={`${isPlaying ? 'pause-fill' : 'play-fill'}  text-xl text-white`} />
                </button>
              )}
            </div>
          )}
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
              {artist &&
                track.artists.map((artist, index) => {
                  return (
                    <Link key={artist.id} to={`../artist/${artist.id}`}>
                      <span className="hover:underline">{artist.name}</span>
                      {index < track.artists.length - 1 ? ', ' : ''}
                    </Link>
                  );
                })}
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
