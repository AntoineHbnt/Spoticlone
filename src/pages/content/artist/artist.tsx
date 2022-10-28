import { ComponentShelf } from '../../../components/component-shelf/component-shelf';
import { Content } from '../../../components/Item/content';
import { useArtist } from '../../../hooks/content/use-artist';
import { useArtistTopTracks } from '../../../hooks/content/use-artist-top-track';
import { Header } from './header';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';

export const Artist = () => {
  const params = useParams<{ id: string }>();

  const { data: artist, status: artistStatus } = useArtist(params.id!);
  const { data: topTracks, status: tracksStatus } = useArtistTopTracks(params.id!);

  if (artistStatus === 'loading') {
    return <div>Artist Loading...</div>;
  }

  if (tracksStatus === 'loading') {
    return <div>Tracks Loading...</div>;
  }

  const contentData: Paging<Track> = {
    href: '',
    items: topTracks!,
    limit: 10,
    next: '',
    offset: 0,
    previous: null,
    total: topTracks!.length || 0,
  };

  return (
    <div className="flex w-full flex-col">
      <Header data={artist!} />
      <Content data={artist!} className="px-6 pb-8 lg:px-8">
        <ComponentShelf title="Popular" data={contentData} />
      </Content>
    </div>
  );
};
