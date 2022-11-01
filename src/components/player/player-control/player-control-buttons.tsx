import { ReactNode } from 'react';
import { Icon, IconSVG } from '../../icon/icon';
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
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    icon,
    isPlayButton = false,
    className = '',
    activeState = false,
    isActive = false,
  } = props;

  return isPlayButton ? (
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
  );
};

export const PlayerControlButton = (props: PlayerControlButtonProps) => {
  const { playback } = props;
  const data = usePlayerButtonData(playback);

  return (
    <div className="mb-2 flex items-center justify-center gap-4">
      <div className="flex items-end gap-2">
        <Button
          onClick={data.toggleShuffle}
          icon={IconSVG.Shuffle}
          activeState
          isActive={playback.shuffle_state}
        />
        <Button onClick={data.skipPrevious} icon={IconSVG.SkipBack} />
      </div>
      {playback?.is_playing ? (
        <Button onClick={data.pausePlayback} isPlayButton icon={IconSVG.Pause} />
      ) : (
        <Button onClick={data.pausePlayback} isPlayButton icon={IconSVG.Play} />
      )}
      <div className="flex items-start gap-2">
        <Button onClick={data.skipNext} icon={IconSVG.SkipForward} />
        <Button
          onClick={data.toggleRepeat}
          icon={playback.repeat_state === 'track' ? IconSVG.RepeatTrack : IconSVG.RepeatContext}
          activeState
          isActive={playback.repeat_state !== 'off'}
        />
      </div>
    </div>
  );
};
