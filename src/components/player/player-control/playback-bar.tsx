import { durationParser } from '../../../utils/misc/duration';

export interface PlaybackBarProps {
  playback: SpotifyApi.CurrentPlaybackResponse;
}

export const PlaybackBar = (props: PlaybackBarProps) => {
  const { playback } = props;

  const progress = (playback.progress_ms! * 100) / playback.item?.duration_ms!;

  return (
    <div className="flex w-full items-center gap-2">
      <span className="min-w-10 flex text-right text-xs">
        {durationParser(playback.progress_ms!)}
      </span>
      <div className="flex h-3 w-full items-center">
        <div className="progress-bar-background relative flex h-1 w-full rounded-full bg-[hsla(0,0%,100%,.3)]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <div
              className=" progress-bar absolute h-full w-full rounded-full bg-white"
              style={{ transform: `translateX(${-100 + progress}%)` }}
            ></div>
          </div>
          <div
            className={`progress-pointer absolute top-[50%] z-50 -ml-1.5 hidden aspect-square h-3 -translate-y-[50%] rounded-full bg-white`}
            style={{ left: `${progress}%` }}
          />
        </div>
      </div>
      <span className="min-w-10 text-xs">{durationParser(playback.item?.duration_ms!)}</span>
    </div>
  );
};
