import { PlayButton } from '../play-button/play-button';
import { Thumbnail, ThumbnailProps } from '../thumbnail/thumbnail';
import './card.styles.scss';

export interface CardProps {
  content: any;
}

export const Card = (props: CardProps) => {
  const { content } = props;

  console.log(content);

  return (
    <div className="card ease relative flex w-52 cursor-pointer flex-col rounded-lg bg-[#181818] p-4 transition duration-300 hover:bg-[#282828]">
      <div className="relative mb-4">
        <Thumbnail src="" alt="" className="rounded" />
        <PlayButton
          isPlaying={false}
          className="play-button ease absolute bottom-0 right-2 cursor-default opacity-0 transition duration-300"
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-base font-bold text-white line-clamp-1"></h3>
        <p className="text-sm text-gray-400 line-clamp-2"></p>
      </div>
    </div>
  );
};
