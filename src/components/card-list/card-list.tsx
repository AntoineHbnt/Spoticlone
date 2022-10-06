import { Card, CardProps } from '../card/card';

export interface CardListProps {
  title: string;
  content: any;
}

export const CardList = (props: CardListProps) => {
  const { title, content } = props;

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-xs font-bold text-gray-400 hover:underline">
          VOIR TOUT
        </a>
      </div>
      <div className="flex gap-6">
        {content.map((elem: any, index: number) => (
          <div key={`card-${index}`}>
            <Card {...elem} />
          </div>
        ))}
      </div>
    </div>
  );
};
