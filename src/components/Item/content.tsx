import { ReactNode } from 'react';
import { useVibrant } from '../../hooks/misc/use-vibrant';
import { Album } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { PlayButton } from '../play-button/play-button';

export interface ContentProps {
  data: Album | Artist;
  children?: ReactNode;
  className?: string;
}

export const Content = (props: ContentProps) => {
  const { data, children, className } = props;
  const { data: color } = useVibrant(data.images[0].url);

  return (
    <div className={`relative w-full`} style={{ backgroundColor: color }}>
      <div className="h-60 w-full bg-gradient-to-b from-[rgba(0,0,0,.6)] to-background-base" />
      <div className="absolute inset-0 flex w-full flex-col">
        <div className="hidden px-6 py-6 md:flex lg:px-8">
          <PlayButton uri={data.uri} width={56} />
        </div>
        <div className={`max-w-[1955px] ${className}`}>{children}</div>
      </div>
    </div>
  );
};
