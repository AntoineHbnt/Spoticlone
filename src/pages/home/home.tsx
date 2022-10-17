import { Helmet } from 'react-helmet';
import { Greetings } from './greetings';
import { useTopTracks } from '../../hooks/content/use-top-tracks';
import { useTopArtists } from '../../hooks/content/use-top-artists';
import { ComponentShelf } from '../../components/component-shelf/component-shelf';

export const Home = () => {
  const { data: topTracks } = useTopTracks({ limit: 9 });
  const { data: topArtists } = useTopArtists({ limit: 9 });

  return (
    <div className="p-6">
      <Helmet>
        <title>Spoticlone - Web Player</title>
      </Helmet>
      <div className="flex h-full flex-col gap-6">
        <Greetings />
        <ComponentShelf title="Your top tracks" data={topTracks!} />
        <ComponentShelf title="Your top artists" data={topArtists!} />
      </div>
    </div>
  );
};
