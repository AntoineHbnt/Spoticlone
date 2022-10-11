import { Thumbnail } from '../thumbnail/thumbnail';

export interface HeaderProps {
  itemType: string;
  name: string;
  image: string;
  artists: any;
  releaseDate: string;
  duration: number;
  color: string;
}

export const Header = (props: HeaderProps) => {
  const { itemType, name, image, artists, releaseDate, duration, color = '#000000' } = props;

  const durationParser = (duration: number) => {
    let minutes = Math.floor(duration / 60000);
    let seconds = parseInt(((duration % 60000) / 1000).toFixed(0));
    return `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} sec`;
  };

  const renderArtists = () => {
    if (itemType === 'track') {
      return (
        <NavLink
          key={`link-${artists[0].id}`}
          to={`/artist/${artists[0].id}`}
          className="text-sm font-bold text-white hover:underline"
        >
          {artists[0].name}
        </NavLink>
      );
    } else {
      return artists.map((artist: any, index: number) => {
        <NavLink
          key={`link-${artist.id}-${index}`}
          to={`/artist/${artist.id}`}
          className="font-bold hover:underline"
        >
          {artist.name}
        </NavLink>;
      });
    }
  };

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
        <h2 className="text-xs font-bold text-white">{itemType.toUpperCase()}</h2>
        <h1 className="truncate text-2xl font-bold text-white">{name}</h1>
        <div className="mt-2 flex h-6 items-center text-sm font-normal text-white">
          {renderArtists()}
          {renderTimeInfo(releaseDate.split('-')[0])}
          {renderTimeInfo(durationParser(duration))}
        </div>
      </div>
    </div>
  );
};
