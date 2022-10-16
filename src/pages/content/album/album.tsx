import { useGetItem } from '../../../hooks/content/use-get-item';
import { albumDuration } from '../../utils/components/album';
import { Header } from './header';

export const Album = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetItem(id!, 'album');

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex w-full flex-col">
      <Header data={data} />
    </div>
  );
};
