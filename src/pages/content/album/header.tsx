import { useVibrant } from '../../../hooks/misc/use-vibrant';
import { Album } from '../../../types/Album';
import { albumDurationParser } from '../../../utils/misc/duration';
import { Thumbnail } from '../../../components/thumbnail/thumbnail';
import { useArtist } from '../../../hooks/content/use-artist';

export interface HeaderProps {
  data: Album;
}

export const Header = (props: HeaderProps) => {
  const { type, name, images, artists, release_date, tracks } = props.data;
  const { data: artist } = useArtist(artists[0].id);
  const { data: color } = useVibrant(images[0].url);
  const image = images[1].url;

  const renderArtists = () => {
    return (
      artist && (
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
      className="lg:h-h-lg-item-header flex h-sm-item-header w-full shrink-0 items-end gap-6 overflow-hidden p-6 lg:px-8"
      style={{ backgroundColor: color }}
    >
      <Thumbnail src={image} alt="album cover" className="w-48 shrink-0 lg:w-56" />
      <div className="flex h-full flex-1 flex-col justify-end overflow-hidden">
        <h2 className="text-xs font-bold text-white">{type.toUpperCase()}</h2>
        <h1 className="truncate text-2xl font-bold text-white">{name}</h1>
        <div className="mt-2 flex h-6 items-center text-sm font-normal text-white">
          <>{renderArtists()}</>
          {renderInfo(release_date.split('-')[0])}
          {renderInfo(albumDurationParser(tracks.items))}
        </div>
      </div>
    </div>
  );
};
