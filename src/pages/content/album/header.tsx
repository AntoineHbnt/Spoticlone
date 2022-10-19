import { useVibrant } from '../../../hooks/misc/use-vibrant';
import { Album } from '../../../types/Album';
import { Artist } from '../../../types/Artist';
import { Track } from '../../../types/Track';
import { albumDurationParser } from '../../../utils/misc/duration';
import { Thumbnail } from '../../../components/thumbnail/thumbnail';

export interface HeaderProps {
  data: Album;
}

export const Header = (props: HeaderProps) => {
  const { data } = props;
  const { type, name, images, artists, release_date, tracks } = props.data;
  const { data: color } = useVibrant(images[0].url);
  const image = images[1].url;

  console.log(data);

  const durationParser = (duration: number) => {
    let minutes = Math.floor(duration / 60000);
    let seconds = parseInt(((duration % 60000) / 1000).toFixed(0));
    return `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} sec`;
  };

  const renderArtists = () =>
    artists.map((artist: any, index: number) => {
      <NavLink
        key={`link-${artist.id}-${index}`}
        to={`/artist/${artist.id}`}
        className="font-bold hover:underline"
      >
        {artist.name}
      </NavLink>;
    });

  const renderTimeInfo = (info: string) => {
    return <span className="before:mx-2 before:text-lg before:content-['•']">{info}</span>;
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
          <>{type !== 'artist' && renderArtists()}</>
          {renderTimeInfo(release_date.split('-')[0])}
          {renderTimeInfo(albumDurationParser(tracks.items))}
        </div>
      </div>
    </div>
  );
};
