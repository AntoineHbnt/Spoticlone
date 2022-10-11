import { PlayButton } from '../play-button/play-button';

export const Player = () => {
  return (
    <div className="flex">
      <PlayButton
        isPlaying={false}
        onChange={() => {}}
        className="h-14 w-14 hover:scale-105"
        iconWidth={28}
      />
    </div>
  );
};
