import { Thumbnail } from '../thumbnail/thumbnail';

export interface PlaybackInfoProps {
  className?: string;
}

export const PlaybackInfo = (props: PlaybackInfoProps) => {
  const { className } = props;

  return (
    <div className={`flex h-full items-center ${className}`}>
      <Thumbnail src="" alt="" className="h-14 w-14" />
      <div className="ml-3.5 flex flex-col">
        <span className="text-sm">Song Name</span>
        <span className="text-xs text-[#b3b3b3]">Artist Name</span>
      </div>
    </div>
  );
};
