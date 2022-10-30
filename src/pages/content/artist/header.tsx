import { useVibrant } from '../../../hooks/misc/use-vibrant';
import { Album } from '../../../types/Album';
import { albumDurationParser } from '../../../utils/misc/duration';
import { Thumbnail } from '../../../components/thumbnail/thumbnail';
import { useArtist } from '../../../hooks/content/use-artist';
import { Artist } from '../../../types/Artist';
import { useArtistAlbums } from '../../../hooks/content/use-artist-albums';
import { numberWithCommas } from '../../../utils/misc/number-parse';

export interface HeaderProps {
  data: Artist;
}

export const Header = (props: HeaderProps) => {
  const { id, name, images, followers } = props.data!;
  const { data: color } = useVibrant(images[0].url);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="flex h-artist-header w-full shrink-0 flex-col gap-6 overflow-hidden px-6 pt-16 pb-6 md:flex-row md:items-end md:py-6 lg:px-8"
      style={{ backgroundColor: color }}
    >
      <Thumbnail
        src={images[0].url}
        alt="album cover"
        className="w-48 shrink-0 self-center rounded-full md:self-end md:rounded-none xl:w-56"
      />
      <div className="flex h-full flex-1 flex-col justify-end overflow-hidden">
        <h1 className="truncate text-3xl font-bold text-white line-clamp-1 md:text-5xl lg:text-7xl xl:text-8xl">
          {name}
        </h1>
        <span className="mt-2 flex h-6 items-center text-sm font-normal text-white">
          {`${numberWithCommas(followers.total)} followers`}
        </span>
      </div>
    </div>
  );
};
