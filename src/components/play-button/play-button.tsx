import { Icon } from '../icon/icon';
import { IconSVG } from '../icon/icon';

export interface PlayButtonProps {
  isPlaying: boolean;
  onChange: (isPlaying: boolean) => void;
  className: string;
}

export const PlayButton = (props: PlayButtonProps) => {
  const { className, isPlaying, onChange } = props;

  return (
    <button
      onClick={() => onChange(!isPlaying)}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-spotify-green drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] ${className}`}
    >
      {isPlaying ? (
        <Icon svg={IconSVG.Pause} fill="#000" width={24} />
      ) : (
        <Icon svg={IconSVG.Play} fill="#000" width={24} />
      )}
    </button>
  );
};
