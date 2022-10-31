import { PlayBackContext } from '../../context/playback-context';
import { Artists } from '../component-shelf/artists';
import { Thumbnail } from '../thumbnail/thumbnail';

export interface PlaybackInfoProps {
  className?: string;
}

export const PlaybackInfo = (props: PlaybackInfoProps) => {
  const { className } = props;
  const playback = useContext(PlayBackContext);
  const item = {
    name: playback?.item?.name,
    artists: playback?.item?.artists,
    image: playback?.item?.album?.images[0].url!,
  };

  return (
    <div className={`flex h-full items-center ${className}`}>
      <Thumbnail src={playback ? item.image : ''} alt="" className="h-14 w-14" />
      <div className="ml-3.5 flex flex-col">
        <span className="text-sm">{playback ? item.name : 'Title'}</span>
        <span className="text-xs text-[#b3b3b3]">
          <Artists artists={playback ? item.artists : []} />
        </span>
      </div>
    </div>
  );
};
