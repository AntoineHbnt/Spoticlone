import { ReactNode } from 'react';
import { useVibrant } from '../../hooks/misc/use-vibrant';
import { Album } from '../../types/Album';
import { PlayButton } from '../play-button/play-button';

export interface ContentProps {
  data: Album;
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
        <div className="flex px-4 py-6 lg:px-8">
          <PlayButton data={data} uri={data.uri} className="h-14 w-14" />
        </div>
        <div className={`max-w-[1955px] ${className}`}>{children}</div>
      </div>
    </div>
  );
};
