import axios from 'axios';
import { useGetActiveDevice } from '../../hooks/player/use-get-active-device';
import { supabase } from '../../supabaseClient';
import { Icon } from '../icon/icon';
import { IconSVG } from '../icon/icon';

export interface PlayButtonProps {
  className?: string;
  iconWidth?: number;
  contextUri: string;
  albumOffset: number;
}

export const PlayButton = (props: PlayButtonProps) => {
  const { className, iconWidth = 24, contextUri, albumOffset } = props;
  const { data: device } = useGetActiveDevice();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async () => {
    if (isPlaying) {
    }
    if (!isPlaying) {
      console.log(contextUri);

      const response = await axios.put(
        'https://api.spotify.com/v1/me/player/play',
        // '{\n  "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",\n  "offset": {\n    "position": 5\n  },\n  "position_ms": 0\n}',
        {
          context_uri: contextUri,
          offset: {
            position: albumOffset,
          },
          position_ms: 0,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabase.auth.session()?.provider_token}`,
          },
          params: {
            device_id: device.id,
          },
        }
      );
      console.log(response);
    }
  };

  return (
    <button
      onClick={() => handleClick()}
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
