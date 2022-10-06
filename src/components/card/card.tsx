import { PlayButton } from '../play-button/play-button';
import { Thumbnail, ThumbnailProps } from '../thumbnail/thumbnail';
import { Artists } from './artists';
import './card.styles.scss';

export interface CardProps {
  data: any;
}

export const Card = (props: CardProps) => {
  const { data } = props;

  return (
    <div className="card ease w-100 relative flex cursor-pointer flex-col rounded-lg bg-[#181818] p-4 transition duration-300 hover:bg-[#282828]">
      <div className="relative mb-4">
        <Thumbnail src={data.album.images[1].url} alt="" className="rounded" />
        <PlayButton
          isPlaying={false}
          className="play-button ease absolute bottom-0 right-2 cursor-default opacity-0 transition duration-300"
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-base font-bold text-white line-clamp-1">{data.name}</h3>
        <Artists artists={data.artists} />
      </div>
    </div>
  );
};
