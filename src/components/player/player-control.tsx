import { Icon, IconSVG } from '../icon/icon';

export interface PlayerControlProps {
  className?: string;
}

export const PlayerControl = (props: PlayerControlProps) => {
  const { className } = props;

  const progress = 14;

  return (
    <div className={`player-control flex flex-col items-center justify-center ${className}`}>
      <div className="mb-2 flex items-center justify-center gap-4">
        <div className="flex items-end">
          <button className="flex h-8 w-8 items-center justify-center">
            <Icon width={16} svg={IconSVG.SkipBack} className="fill-[#b3b3b3] hover:fill-white" />
          </button>
        </div>
        <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white hover:scale-105">
          <Icon width={18} svg={IconSVG.Play} />
        </button>
        <div className="flex items-start">
          <button className="flex h-8 w-8 items-center justify-center">
            <Icon
              width={16}
              svg={IconSVG.SkipForward}
              className="fill-[#b3b3b3] hover:fill-white"
            />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <span className="min-w-10 flex text-right text-xs">0:00</span>
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
        <span className="min-w-10 text-xs">3:00</span>
      </div>
    </div>
  );
};
