import { PlayBackContext } from '../../context/playback-context';
import { Icon, IconSVG } from '../icon/icon';
import { Thumbnail } from '../thumbnail/thumbnail';

export const PlayerInfo = () => {
  const playback = useContext(PlayBackContext);
  const item = {
    name: playback?.item?.name,
    image: (playback?.item as SpotifyApi.TrackObjectFull).album?.images[0]!,
    device: playback?.device?.name,
  };

  return (
    <div className="flex items-center gap-2">
      <Thumbnail src={playback ? item.image.url : ''} alt="" className="w-10 rounded-sm" />
      <div className="flex flex-col text-xs">
        <span className=" font-bold text-white">{playback ? item.name : 'Title'}</span>
        <div className="flex gap-1">
          <Icon svg={IconSVG.Device} width={12} fill="#1ed760" />
          <span className="text-spotify-green">{item.device}</span>
        </div>
      </div>
    </div>
  );
};
