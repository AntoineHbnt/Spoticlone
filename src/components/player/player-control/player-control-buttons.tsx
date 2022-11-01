import { TooltipContent } from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import { Icon, IconSVG } from '../../icon/icon';
import { Tooltip } from '../../tooltip/Tooltip';
import { usePlayerButtonData } from './player-control-button.data';

export interface PlayerControlButtonProps {
  playback: SpotifyApi.CurrentPlaybackResponse;
}

export interface ButtonProps {
  onClick: () => void;
  isPlayButton?: boolean;
  icon: IconSVG;
  className?: string;
  activeState?: boolean;
  isActive?: boolean;
  tooltipContent: string;
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    icon,
    isPlayButton = false,
    className = '',
    activeState = false,
    isActive = false,
    tooltipContent,
  } = props;

  return (
    <Tooltip content={tooltipContent}>
      {isPlayButton ? (
        <button
          onClick={onClick}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white hover:scale-105 ${className}`}
        >
          <Icon width={18} svg={icon} />
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`relative flex h-8 w-8 items-center justify-center ${className}`}
        >
          <Icon
            width={16}
            svg={icon}
            className={
              activeState && isActive
                ? 'fill-[#1db954] hover:fill-spotify-green'
                : 'fill-[#b3b3b3] hover:fill-white'
            }
          />
          {activeState && isActive && (
            <div className="absolute bottom-0 h-1 w-1 rounded-full bg-[#1db954]" />
          )}
        </button>
      )}
    </Tooltip>
  );
};

export const PlayerControlButton = (props: PlayerControlButtonProps) => {
  const { playback } = props;
  const data = usePlayerButtonData(playback);

  return (
    <div className="mb-2 flex items-center justify-center gap-4">
      <div className="flex items-end gap-2">
        <Button
          tooltipContent="Enable shuffle"
          onClick={data.toggleShuffle}
          icon={IconSVG.Shuffle}
          activeState
          isActive={playback.shuffle_state}
        />
        <Button tooltipContent="Previous" onClick={data.skipPrevious} icon={IconSVG.SkipBack} />
      </div>
      {playback?.is_playing ? (
        <Button
          tooltipContent="Pause"
          onClick={data.pausePlayback}
          isPlayButton
          icon={IconSVG.Pause}
        />
      ) : (
        <Button
          tooltipContent="Play"
          onClick={data.pausePlayback}
          isPlayButton
          icon={IconSVG.Play}
        />
      )}
      <div className="flex items-start gap-2">
        <Button tooltipContent="Next" onClick={data.skipNext} icon={IconSVG.SkipForward} />
        <Button
          tooltipContent="Enable repeat"
          onClick={data.toggleRepeat}
          icon={playback.repeat_state === 'track' ? IconSVG.RepeatTrack : IconSVG.RepeatContext}
          activeState
          isActive={playback.repeat_state !== 'off'}
        />
      </div>
    </div>
  );
};
