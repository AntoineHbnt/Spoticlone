import { Header } from './header';
import { Content } from '../../../components/Item/content';
import { TrackListRow } from '../../../components/tracklist-row/tracklist-row';
import { Track } from '../../../types/Track';
import { Icon, IconSVG } from '../../../components/icon/icon';
import { ComponentShelf } from '../../../components/component-shelf/component-shelf';
import { useArtistAlbums } from '../../../hooks/content/use-artist-albums';
import { queryClient } from '../../../main';
import { queryKeys } from '../../../hooks/query-keys';
import { useAlbum } from '../../../hooks/content/use-album';
import { defaultArtist } from '../../../types/Defaults';

export const Album = () => {
  const { id } = useParams<{ id: string }>();
  const { data: album, status } = useAlbum(id!);
  const { data: albums } = useArtistAlbums(album ? album.artists[0].id : '');

  useEffect(() => {
    if (album) queryClient.invalidateQueries(queryKeys.artistAlbums(album.artists[0].id));
  }, [album]);

  if (status === 'loading') return <div>Loading...</div>;

  return album ? (
    <div className="flex w-full flex-col">
      <Header data={album} />
      <Content data={album} className="px-6 pb-8 lg:px-8">
        <div className="mb-8">
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
        </div>
        {albums && <ComponentShelf title={`More by ${album.artists[0].name}`} data={albums} />}
      </Content>
    </div>
  ) : (
    <>Album</>
  );
};
