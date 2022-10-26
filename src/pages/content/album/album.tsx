import { Header } from './header';
import { Content } from '../../../components/Item/content';
import { TrackListRow } from '../../../components/tracklist-row/tracklist-row';
import { Track } from '../../../types/Track';
import { Icon, IconSVG } from '../../../components/icon/icon';
import { ComponentShelf } from '../../../components/component-shelf/component-shelf';
import { redirect, useLoaderData } from 'react-router-dom';
import { queryKeys } from '../../../hooks/query-keys';
import { getAlbumById } from '../../../api/album';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useArtistAlbums } from '../../../hooks/content/use-artist-albums';
import { queryClient } from '../../../router';

const albumQuery = (id: string) => ({
  queryKey: queryKeys.album(id),
  queryFn: async () => {
    const album = await getAlbumById(id);
    if (!album) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }
    return album;
  },
});

export const loader =
  (queryClient: any) =>
  async ({ params }: any) => {
    const query = albumQuery(params.id);
    return queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query));
  };

export const Album = () => {
  const params = useParams<{ id: string }>();

  const { data: album, status, refetch: albumRefetch } = useQuery(albumQuery(params.id!));
  const { data: artistAlbums, refetch: artistAlbumsRefetch } = useArtistAlbums(
    album!.artists[0].id!
  );

  useEffect(() => {
    albumRefetch();
    artistAlbumsRefetch();
  }, [params]);

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div className="flex w-full flex-col">
      <Header data={album!} />
      <Content data={album!} className="px-6 pb-8 lg:px-8">
        <div className="mb-8">
          <div className="mb-2 flex w-full border-b border-[hsla(0,0%,100%,.1)] p-2 text-xs text-[#b3b3b3]">
            <span className="mr-4 flex w-10 items-center justify-center">#</span>
            <span>TITLE</span>
            <div className="mr-2 flex flex-1 justify-end">
              <Icon width={16} fill={'#b3b3b3'} svg={IconSVG.Duration} />
            </div>
          </div>
          {album!.tracks.items.map((elem, index) => {
            const track: Track = {
              ...elem,
              album: album!,
              popularity: album!.popularity,
              external_ids: { isrc: '' },
            };
            return <TrackListRow track={track} index={index + 1} key={track.id} />;
          })}
        </div>
        {artistAlbums && (
          <ComponentShelf
            title={`More by ${album!.artists[0].name}`}
            data={{
              ...artistAlbums,
              items: artistAlbums.items.filter((item) => item.id !== album!.id),
            }}
          />
        )}
      </Content>
    </div>
  );
};
