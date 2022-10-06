import { useAuthUser } from '../../hooks/auth/use-auth-user';
import { Helmet } from 'react-helmet';
import { Greetings } from './greetings';
import { CardList } from '../../components/card-list/card-list';
import { useTopItems } from '../../hooks/content/use-top-item';
import { Card } from '../../components/card/card';

export const Home = () => {
  const { data: topTracks } = useTopItems({ type: 'tracks', limit: 9 });
  const { data: topArtists } = useTopItems({ type: 'artists', limit: 9 });

  return (
    <>
      <Helmet>
        <title>Spoticlone - Web Player</title>
      </Helmet>
      <div className="flex h-full flex-col gap-6">
        <Greetings />
        <CardList title="Your top tracks">
          {topTracks &&
            topTracks.items.map((elem: any, index: number) => (
              <div key={`card-${index}`}>
                <Card data={elem} />
              </div>
            ))}
        </CardList>
        <CardList title="Your top tracks">
          {topTracks &&
            topTracks.items.map((elem: any, index: number) => (
              <div key={`card-${index}`}>
                <Card data={elem} />
              </div>
            ))}
        </CardList>
        <CardList title="Your top tracks">
          {topTracks &&
            topTracks.items.map((elem: any, index: number) => (
              <div key={`card-${index}`}>
                <Card data={elem} />
              </div>
            ))}
        </CardList>
        <CardList title="Your top tracks">
          {topTracks &&
            topTracks.items.map((elem: any, index: number) => (
              <div key={`card-${index}`}>
                <Card data={elem} />
              </div>
            ))}
        </CardList>
        <CardList title="Your top tracks">
          {topTracks &&
            topTracks.items.map((elem: any, index: number) => (
              <div key={`card-${index}`}>
                <Card data={elem} />
              </div>
            ))}
        </CardList>
      </div>
    </>
  );
};
