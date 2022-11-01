import { Helmet } from 'react-helmet';
import { Greetings } from './greetings';
import { useTopArtists } from '../../hooks/content/user/use-top-artists';
import { ComponentShelf } from '../../components/component-shelf/component-shelf';
import { useTopTracks } from '../../hooks/content/user/use-top-tracks';
import { useHomeData } from './home.data';

export const Home = () => {
  const { topTracks, topArtists, isLoading } = useHomeData(9);

  if (isLoading) {
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
