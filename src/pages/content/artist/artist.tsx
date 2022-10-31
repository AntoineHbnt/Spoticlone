import { ComponentShelf, Tab } from '../../../components/component-shelf/component-shelf';
import { Content } from '../../../components/Item/content';
import { Header } from './header';
import { Paging } from '../../../types/Paging';
import { Track } from '../../../types/Track';
import { Album } from '../../../types/Album';
import { useArtistPageData } from './artist.data';

export const Artist = () => {
  const params = useParams<{ id: string }>();
  const data = useArtistPageData(params.id!);

  if (data.isError) {
    throw new Error('Artist not found');
  }

  if (data.isLoading) {
    return <div>Loading...</div>;
  }

  const albumToPaging = (items: Album[] | Track[]): Paging<Album | Track> => ({
    href: '',
    items: items!,
    limit: 10,
    next: '',
    offset: 0,
    previous: null,
    total: data.artistTopTracks!.length || 0,
  });

  const tabs: Tab[] = [
    {
      title: 'Albums',
      data: data.artistAlbums!,
    },
    {
      title: 'Singles and EPs',
      data: data.artistSingles!,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Header data={data.artist!} />
      <Content data={data.artist!} className="p-6 pb-8 md:px-6 lg:px-8">
        <ComponentShelf
          title="Popular"
          index={true}
          data={albumToPaging(data.artistTopTracks!)}
          min={5}
          artist={false}
        />
        <ComponentShelf title="Discography" index={true} tabs={tabs} min={5} className="mb-10" />
        <ComponentShelf
          title="Appears On"
          index={true}
          data={data.artistAppearsOn!}
          className="mb-10"
        />
      </Content>
    </div>
  );
};
