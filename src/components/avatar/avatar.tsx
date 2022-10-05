export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { src, alt, size = 32 } = props;
  return <img className="rounded-full" src={src} alt={alt} width={size} height={size} />;
};
