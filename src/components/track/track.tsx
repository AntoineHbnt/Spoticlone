import Vibrant from 'node-vibrant';
import { SetStateAction } from 'react';
import { useGetItem } from '../../hooks/content/use-get-item';
import { Content } from '../Item/content';
import { Header } from '../Item/header';

export const Track = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetItem(id!, 'track');
  const [vibrantColor, setVibrantColor] = useState<string>('#000000');

  const handleColor = async () => {
    let v = await new Vibrant(data.album.images[0].url).getPalette();
    setVibrantColor(v.Vibrant!.getHex());
  };

  if (!data) return <div>Loading...</div>;

  console.log(data);

  handleColor();
  const { type, name, album, artists, duration_ms, track_number } = data;

  return (
    <div id="track-container" className="flex h-full w-full flex-col">
      <Header
        itemType={type}
        name={name}
        image={album.images[0].url}
        artists={artists}
        releaseDate={album.release_date}
        duration={duration_ms}
        color={vibrantColor}
      />
      <Content color={vibrantColor} contextUri={album.uri} albumOffset={track_number - 1} />
    </div>
  );
};
