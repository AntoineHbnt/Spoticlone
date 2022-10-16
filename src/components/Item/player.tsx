import { PlayButton, PlayButtonProps } from '../play-button/play-button';

export const Player = (props: PlayButtonProps) => {
  return (
    <div className="flex">
      <PlayButton className="h-14 w-14 hover:scale-105" iconWidth={28} itemData={props.itemData} />
    </div>
  );
};
