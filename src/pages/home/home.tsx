import { Helmet } from 'react-helmet';
import { Greetings } from './greetings';
import { useTopTracks } from '../../hooks/content/use-top-tracks';
import { useTopArtists } from '../../hooks/content/user/use-top-artists';
import { ComponentShelf } from '../../components/component-shelf/component-shelf';

export const Home = () => {
  const { data: topTracks, status: tracksStatus } = useTopTracks({ limit: 9 });
  const { data: topArtists, status: artistsStatus } = useTopArtists({ limit: 9 });

  if (tracksStatus === 'loading' || artistsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-6">
      <div className="flex h-full flex-col gap-6">
        <Greetings />
        <ComponentShelf title="Your top tracks" index={false} data={topTracks!} />
        <ComponentShelf title="Your top artists" data={topArtists!} />
      </div>
    </div>
  );
};
