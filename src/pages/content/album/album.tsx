import { Header } from './header';
import { Content } from '../../../components/Item/content';
import { TrackListRow } from '../../../components/tracklist-row/tracklist-row';
import { Track } from '../../../types/Track';
import { Icon, IconSVG } from '../../../components/icon/icon';
import { ComponentShelf } from '../../../components/component-shelf/component-shelf';
import { useAlbumData } from './album.data';

export const Album = () => {
  const params = useParams<{ id: string }>();
  const { album, artistAlbums, isLoading, isError, error } = useAlbumData(params.id!);

  if (isError) {
    throw new Error(error!.message);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex w-full flex-col">
      <Header />
      <Content data={album!} className="b-8  p-6 md:py-0 lg:px-8">
        <div className="mb-8">
          <div className="mb-2 hidden w-full border-b border-[hsla(0,0%,100%,.1)] p-2 text-xs text-[#b3b3b3] md:flex">
            <span className="mr-4 flex w-10 items-center justify-center">#</span>
            <span>TITLE</span>
            <div className="mr-2 flex flex-1 justify-end">
              <Icon width={16} fill={'#b3b3b3'} svg={IconSVG.Duration} />
            </div>
          </div>
          {album!.tracks.items.map((elem: any, index: any) => {
            const track: Track = {
              ...elem,
              album: album!,
              popularity: album!.popularity,
              external_ids: { isrc: '' },
            };
            return (
              <TrackListRow track={track} thumbnail={false} index={index + 1} key={track.id} />
            );
          })}
        </div>
        {artistAlbums && artistAlbums.items.length > 1 && (
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
