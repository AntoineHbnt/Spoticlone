export interface ThumbnailProps {
  src: string;
  alt: string;
  className?: string;
}

export const Thumbnail = (props: ThumbnailProps) => {
  const { src, alt, className } = props;

  return (
    <div className={`relative aspect-square w-full overflow-hidden bg-red-100 ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
};
