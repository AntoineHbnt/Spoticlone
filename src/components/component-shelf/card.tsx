import { PlayBackContext } from '../../context/PlaybackContext';
import { usePausePlayback } from '../../hooks/player/use-pause-playback';
import { useStartPlayback } from '../../hooks/player/use-start-playback';
import { PlayButton } from '../play-button/play-button';
import { Thumbnail } from '../thumbnail/thumbnail';
import { Artists } from './artists';
import './card.styles.scss';

export interface CardProps {
  data: any;
}

export const Card = (props: CardProps) => {
  const { data } = props;
  const playback = useContext(PlayBackContext);
  const isArtist = data.type === 'artist';
  const images = data.images || data.album?.images;
  const src = images[0]?.url || '';
  const isPlayingCondition: boolean = playback?.is_playing && playback?.context?.uri === data.uri;

  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingCondition);

  const { mutateAsync: startPlayback } = useStartPlayback(data.uri, 0, 0);
  const { mutateAsync: pausePlayback } = usePausePlayback();

  useEffect(() => {
    setIsPlaying(isPlayingCondition);
  }, [playback]);

  return (
    <div
      className={`card ease w-100 relative flex cursor-pointer flex-col rounded-lg bg-[#181818] p-4 transition duration-300  ${
        isPlaying ? 'bg-[#282828]' : 'hover:bg-[#282828]'
      }`}
    >
      <div className="relative mb-4">
        <Thumbnail src={src} alt="" className={isArtist ? 'rounded-full' : 'rounded'} />
        <PlayButton
          className={`play-button ease absolute bottom-0 right-2 z-10 cursor-default opacity-0 transition duration-300 ${
            isPlaying ? 'active' : ''
          }`}
          uri={data.uri}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-base font-bold text-white line-clamp-1">{data.name}</h3>
        <div className="z-10 h-[2.5rem] text-sm text-gray-400 line-clamp-2">
          {isArtist ? <span>Artist</span> : <Artists artists={data.artists} />}
        </div>
        <Link to={`/${data.type}/${data.id}`} className="absolute inset-0 h-full w-full" replace />
      </div>
    </div>
  );
};
