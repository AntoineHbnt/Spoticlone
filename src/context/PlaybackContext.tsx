import { createContext, ReactNode } from 'react';
import { apiSPotify } from '../utils/axios';

const PlayBackContext = createContext<any>({});

const PlayBackContextProvider = (props: { children: ReactNode }) => {
  const [playback, setPlayback] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await apiSPotify.get('/me/player');
      setPlayback(response.data);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <PlayBackContext.Provider value={playback}>{props.children}</PlayBackContext.Provider>;
};

export { PlayBackContext, PlayBackContextProvider };
