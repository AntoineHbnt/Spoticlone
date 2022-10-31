export interface PlaybackDeviceProps {
  className?: string;
}

export const PlaybackDevice = (props: PlaybackDeviceProps) => {
  const { className } = props;

  return <div className={`flex h-full w-full items-center justify-end ${className}`}></div>;
};
