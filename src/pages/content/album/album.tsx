import { Header } from './header';
import { useGetItem } from '../../../hooks/content/use-get-item';
import { Album as AlbumType } from '../../../types/Album';
import { Content } from '../../../components/Item/content';

export const Album = () => {
  const { id } = useParams<{ id: string }>();
  const { data, status } = useGetItem(id!, 'album');

  if (status === 'loading') return <div>Loading...</div>;

  const album = data as AlbumType;

  return (
    <div className="flex w-full flex-col">
      <Header data={album as AlbumType} />
      <Content data={album} />
    </div>
  );
};
