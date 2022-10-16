import { Player } from './player';

export interface ContentProps {
  color: string;
  itemData: any;
}

export const Content = (props: ContentProps) => {
  const { color, itemData } = props;

  return (
    <div className="relative w-full" style={{ backgroundColor: color }}>
      <div className="h-60 w-full bg-gradient-to-b from-[rgba(0,0,0,.6)] to-background-base" />
      <div className="absolute inset-0 w-full">
        <div className="px-4 py-6 lg:px-8">
          <Player itemData={itemData} />
        </div>
      </div>
    </div>
  );
};
