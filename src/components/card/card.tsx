import { PlayButton } from '../play-button/play-button';
import { Thumbnail } from '../thumbnail/thumbnail';
import './card.styles.scss';

export const Card = () => {
  return (
    <div className="card ease relative flex w-52 cursor-pointer flex-col rounded-lg bg-[#181818] p-4 transition duration-300 hover:bg-[#282828]">
      <div className="relative mb-4">
        <Thumbnail
          src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default"
          alt="Valdimir Cauchemar"
          className="rounded"
        />
        <PlayButton
          isPlaying={false}
          className="play-button ease absolute bottom-0 right-2 cursor-default opacity-0 transition duration-300"
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-base font-bold text-white line-clamp-1">Mix Vladimir Cauchemar</h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </div>
    </div>
  );
};
