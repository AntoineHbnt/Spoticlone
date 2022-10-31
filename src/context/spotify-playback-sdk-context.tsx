import { createContext, ReactNode } from 'react';

const SpotifySdkContext = createContext<any>({});

export const SpotifySdkContextProvider = (props: { token: string; children: ReactNode }) => {
  const [player, setPlayer] = useState<any>(undefined);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(props.token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();
    };
  }, []);

  return <SpotifySdkContext.Provider value={player}>{props.children}</SpotifySdkContext.Provider>;
};
