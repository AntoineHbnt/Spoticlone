import { createContext, ReactNode } from 'react';
import { useSession } from '../hooks/auth/use-session';
import { defaultPlaybackState } from '../types/Player';
import { apiSpotify } from '../utils/axios/axios';

const PlayBackContext = createContext<any>(defaultPlaybackState);

const PlayBackContextProvider = (props: { children: ReactNode }) => {
  const [playback, setPlayback] = useState<any>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const interval = setInterval(async () => {
        const response = await apiSpotify.get('/me/player');
        setPlayback(response.data);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [session]);

  return <PlayBackContext.Provider value={playback}>{props.children}</PlayBackContext.Provider>;
};

export { PlayBackContext, PlayBackContextProvider };
