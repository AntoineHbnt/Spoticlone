import { ComponentShelf, Tab } from '../../../components/component-shelf/component-shelf';
import { Content } from '../../../components/Item/content';
import { useArtist } from '../../../hooks/content/use-artist';
import { useArtistTopTracks } from '../../../hooks/content/use-artist-top-track';
import { Header } from './header';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';
import { useArtistAlbums } from '../../../hooks/content/use-artist-albums';
import { useArtistSingles } from '../../../hooks/content/use-artist-singles';

export const Artist = () => {
  const params = useParams<{ id: string }>();

  const { data: artist, status: artistStatus } = useArtist(params.id!);
  const { data: topTracks, status: tracksStatus } = useArtistTopTracks(params.id!);
  const { data: albums, status: artistAlbumsStatus } = useArtistAlbums(params.id!);
  const { data: singles, status: artistSinglesStatus } = useArtistSingles(params.id!);

  if (
    artistStatus === 'loading' ||
    tracksStatus === 'loading' ||
    artistAlbumsStatus === 'loading' ||
    artistSinglesStatus === 'loading'
  ) {
    return <div>Loading...</div>;
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

  const tabs: Tab[] = [
    {
      title: 'Albums',
      data: albums!,
    },
    {
      title: 'Singles and EPs',
      data: singles!,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Header data={artist!} />
      <Content data={artist!} className="px-6 pb-8 lg:px-8">
        <ComponentShelf title="Popular" index={true} data={contentData} min={5} artist={false} />
        <ComponentShelf title="Discography" index={true} tabs={tabs} min={5} />
      </Content>
    </div>
  );
};
