import { Icon, IconSVG } from '../icon/icon';

export interface ThumbnailProps {
  src: string;
  alt: string;
  className?: string;
}

export const Thumbnail = (props: ThumbnailProps) => {
  const { src, alt, className } = props;

  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#333] drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Icon svg={IconSVG.ItemWithoutSrc} width={64} fill="rgba(255,255,255,0.7)" />
      )}
    </div>
  );
};
