import { Track } from '../../types/Track';
import { durationParser } from '../../utils/misc/duration';
import { ExplicitIcon } from '../icon/icons/explicit';

export interface TrackListRowProps {
  track: Track;
}

export const TrackListRow = (props: TrackListRowProps) => {
  const { track } = props;

  console.log(props);

  return (
    <div className="flex w-full items-center justify-between rounded p-2 pr-4 hover:bg-background-tinted-highlight">
      <div className="flex items-center">
        <img className="h-10 w-10" src={track.album.images[0].url} alt={track.album.name} />
        <div className="ml-4">
          <p className="text-base text-white">{track.name}</p>
          <p className="flex items-center text-sm text-gray-400">
            {track.explicit && <ExplicitIcon className="mr-2" />}
            {track.artists.map((artist) => artist.name).join(', ')}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-sm text-gray-400">{durationParser(track.duration_ms)}</p>
      </div>
    </div>
  );
};
