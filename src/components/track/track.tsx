import { useGetItem } from '../../hooks/content/use-get-item';
import { ItemHeader } from '../itemHeader/itemHeader';

export const Track = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetItem(id!, 'track');
  const container = useRef<HTMLDivElement>(null);

  if (!data) return <div>Loading...</div>;

  const { type, name, album, artists, duration_ms } = data;

  return (
    <div ref={container} id="track-container" className="flex w-full flex-col">
      <ItemHeader
        itemType={type}
        name={name}
        image={album.images[0].url}
        artists={artists}
        releaseDate={album.release_date}
        duration={duration_ms}
      />
    </div>
  );
};
