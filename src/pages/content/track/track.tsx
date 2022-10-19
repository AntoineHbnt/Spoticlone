import Vibrant from 'node-vibrant';
import { SetStateAction } from 'react';
import { useGetItem } from '../../../hooks/content/use-get-item';
import { Content } from '../../../components/Item/content';
import { Header } from '../album/header';
import { Track as TrackType } from '../../../types/Track';

export const Track = () => {
  /* const { id } = useParams<{ id: string }>();
  const { data } = useGetItem(id!, 'track');
  const [vibrantColor, setVibrantColor] = useState<string>('#000000');

  const track = data as TrackType;

  const handleColor = async () => {
    let v = await new Vibrant(track!.album.images[0].url).getPalette();
    setVibrantColor(v.Vibrant!.getHex());
  };

  if (!track) return <div>Loading...</div>;

  handleColor();
  const { type, name, album, artists, duration_ms } = track; */

  return (
    <div id="track-container" className="flex h-full w-full flex-col">
      {/* <Header
        itemType={type}
        name={name}
        image={album.images[1].url}
        artists={artists}
        releaseDate={album.release_date}
        duration={duration_ms}
        color={vibrantColor}
      />
      <Content color={vibrantColor} itemData={track} /> */}
    </div>
  );
};
