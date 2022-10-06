import { useAuthUser } from '../../hooks/auth/use-auth-user';
import { Helmet } from 'react-helmet';
import { Greetings } from './greetings';
import { CardList } from '../../components/card-list/card-list';
import { useTopItems } from '../../hooks/content/use-top-item';

export const Home = () => {
  const { data: topTracks } = useTopItems({ type: 'tracks' });

  useEffect(() => {
    console.log(topTracks);
  }, [topTracks]);

  return (
    <>
      <Helmet>
        <title>Spoticlone - Web Player</title>
      </Helmet>
      <div className="h-full overflow-y-auto">
        <Greetings />
        {/* <CardList title='Your top tracks'  /> */}
      </div>
    </>
  );
};
