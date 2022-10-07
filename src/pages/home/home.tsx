import { useAuthUser } from '../../hooks/auth/use-auth-user';
import { Helmet } from 'react-helmet';
import { Greetings } from './greetings';
import { CardList } from '../../components/card-list/card-list';
import { Card } from '../../components/card/card';
import { useTopTracks } from '../../hooks/content/use-top-tracks';
import { useTopArtists } from '../../hooks/content/use-top-artists';

export const Home = () => {
  const { data: topTracks } = useTopTracks({ limit: 9 });
  const topArtists = useTopArtists({ limit: 9 });

  console.log(topTracks, topArtists);

  return (
    <>
      <Helmet>
        <title>Spoticlone - Web Player</title>
      </Helmet>
      <div className="flex h-full flex-col gap-6">
        <Greetings />
        <CardList title="Your top tracks" data={topTracks} />
        <CardList title="Your top artists" data={topArtists} />
      </div>
    </>
  );
};
