import { Card, CardProps } from '../card/card';

export interface CardListProps {
  title: string;
  cards: CardProps[];
}

export const CardList = (props: CardListProps) => {
  const { title, cards } = props;

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-xs font-bold text-gray-400 hover:underline">
          VOIR TOUT
        </a>
      </div>
      <div className="flex gap-6">
        {cards.map((card, index) => (
          <div key={`card-${index}`}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};
