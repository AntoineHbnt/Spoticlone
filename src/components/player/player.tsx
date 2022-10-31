import { PlaybackInfo } from './playback-info';
import { PlayerControl } from './player-control';
import './player.styles.scss';

export const Player = () => {
  return (
    <div className="flex h-[90px] w-full border-t border-[#282828] bg-[#181818] px-4 text-white">
      <PlaybackInfo className="w-[30%]" />
      <PlayerControl className="w-[40%]" />
      <div className="w-[30%]"></div>
    </div>
  );
};
