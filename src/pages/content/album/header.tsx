import { albumDurationParser } from '../../../utils/misc/duration';
import { Thumbnail } from '../../../components/thumbnail/thumbnail';
import { useAlbumData } from './album.data';

export const Header = (props: { albumId: string }) => {
  const { album, artist, color } = useAlbumData(props.albumId);

  const image = album!.images[1].url;

  const renderArtists = () => {
    return (
      album && (
        <>
          <Thumbnail
            src={artist!.images[0].url}
            alt={artist!.name}
            className="mr-1 w-6 rounded-full"
          />
          <NavLink
            key={`link-${artist!.id}`}
            to={`/artist/${artist!.id}`}
            className="font-bold hover:underline"
          >
            {artist!.name}
          </NavLink>
        </>
      )
    );
  };

  const renderInfo = (info: string) => {
    return <span className="before:mx-1 before:text-lg before:content-['•']">{info}</span>;
  };

  return (
    <div
      className="flex h-album-header w-full shrink-0 flex-col gap-6 overflow-hidden p-6 md:flex-row md:items-end lg:px-8"
      style={{ backgroundColor: color }}
    >
      <Thumbnail
        src={image}
        alt="album cover"
        className="w-48 shrink-0 self-center md:self-end xl:w-56"
      />
      <div className="flex h-full flex-1 flex-col justify-end overflow-hidden">
        <h2 className="hidden text-xs font-bold text-white md:block">
          {album?.album_type.toUpperCase()}
        </h2>
        <h1 className="truncate  text-2xl font-bold text-white line-clamp-1 md:text-5xl lg:text-7xl xl:text-8xl">
          {album!.name}
        </h1>
        <div className="mt-2 flex h-6 items-center text-sm font-normal text-white">
          <>{renderArtists()}</>
          {renderInfo(album!.release_date.split('-')[0])}
          {renderInfo(albumDurationParser(album!.tracks.items))}
        </div>
      </div>
    </div>
  );
};
