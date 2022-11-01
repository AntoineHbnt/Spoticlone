import { Thumbnail } from '../../../components/thumbnail/thumbnail';
import { numberWithCommas } from '../../../utils/misc/number-parse';
import { useArtistPageData } from './artist.data';

export const Header = () => {
  const params = useParams<{ id: string }>();
  const { artist, color, isLoading } = useArtistPageData(params.id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="flex h-artist-header w-full shrink-0 flex-col gap-6 overflow-hidden px-6 pt-16 pb-6 md:flex-row md:items-end md:py-6 lg:px-8"
      style={{ backgroundColor: color }}
    >
      <Thumbnail
        src={artist!.images[0].url}
        alt="album cover"
        className="w-48 shrink-0 self-center rounded-full md:self-end md:rounded-none xl:w-56"
      />
      <div className="flex h-full flex-1 flex-col justify-end overflow-hidden">
        <h1 className="truncate text-3xl font-bold text-white line-clamp-1 md:text-5xl lg:text-7xl xl:text-8xl">
          {artist!.name}
        </h1>
        <span className="mt-2 flex h-6 items-center text-sm font-normal text-white">
          {`${numberWithCommas(artist!.followers.total)} followers`}
        </span>
      </div>
    </div>
  );
};
