import { Thumbnail } from '../thumbnail/thumbnail';

export interface ItemHeaderProps {
  itemType: string;
  name: string;
  image: string;
  artists: any;
  releaseDate: string;
  duration: number;
}

export const ItemHeader = (props: ItemHeaderProps) => {
  const { itemType, name, image, artists, releaseDate, duration } = props;

  return (
    <div className="flex h-[310px] w-full items-end gap-6 overflow-hidden p-6 lg:h-[350px]">
      <Thumbnail src={image} alt="album cover" className="w-48 shrink-0 lg:w-56" />
      <div className="flex h-full flex-1 flex-col justify-end overflow-hidden">
        <h2 className="text-xs font-bold text-white">{itemType.toUpperCase()}</h2>
        <h1 className="truncate text-2xl font-bold text-white">{name}</h1>
        <div className="mt-2 flex h-6 items-center">
          {artists.map((artist: any, index: number) => (
            <>
              <NavLink
                key={`link-${artist.id}-${index}`}
                to={`/artist/${artist.id}`}
                className="text-sm font-bold text-white hover:underline"
              >
                {artist.name}
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
