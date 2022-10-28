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
      className="relative flex h-item-header w-full shrink-0 items-end gap-6 overflow-hidden bg-cover px-4 pb-6 lg:px-8"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-0  right-0 h-full">
        <img src={images[0].url} className="h-full object-cover" />
      </div>
      <div className="z-10 flex h-full flex-1 flex-col justify-end overflow-hidden">
        <h1 className="truncate text-8xl font-bold text-white line-clamp-1">{name}</h1>
        <span className="mt-2 flex h-6 items-center text-sm font-normal text-white">
          {`${numberWithCommas(followers.total)} followers`}
        </span>
      </div>
    </div>
  );
};
