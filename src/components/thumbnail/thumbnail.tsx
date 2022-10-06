export interface ThumbnailProps {
  src: string;
  alt: string;
  className?: string;
}

export const Thumbnail = (props: ThumbnailProps) => {
  const { src, alt, className } = props;

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] ${className}`}
    >
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
};
