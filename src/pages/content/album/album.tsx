import { Header } from './header';
import { useGetItem } from '../../../hooks/content/use-get-item';
import { Album as AlbumType } from '../../../types/Album';
import { Content } from '../../../components/Item/content';
import { TrackListRow } from '../../../components/tracklist-row/tracklist-row';
import { Track } from '../../../types/Track';
import { Icon, IconSVG } from '../../../components/icon/icon';

export const Album = () => {
  const { id } = useParams<{ id: string }>();
  const { data, status } = useGetItem(id!, 'album');

  if (status === 'loading') return <div>Loading...</div>;

  const album = data as AlbumType;

  return (
    <div className="flex w-full flex-col">
      <Header data={album as AlbumType} />
      <Content data={album} className="px-8">
        <div className="mb-2 flex w-full border-b border-[hsla(0,0%,100%,.1)] p-2 text-xs text-[#b3b3b3]">
          <span className="mr-4 flex w-10 items-center justify-center">#</span>
          <span>TITLE</span>
          <div className="mr-2 flex flex-1 justify-end">
            <Icon width={16} fill={'#b3b3b3'} svg={IconSVG.Duration} />
          </div>
        </div>
        {album.tracks.items.map((elem, index) => {
          const track: Track = {
            ...elem,
            album,
            popularity: album.popularity,
            external_ids: { isrc: '' },
          };
          return <TrackListRow track={track} index={index + 1} key={track.id} />;
        })}
      </Content>
    </div>
  );
};
