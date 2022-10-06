import { Card, CardProps } from '../card/card';

export interface CardListProps {
  title: string;
  children: JSX.Element[];
}

export const CardList = (props: CardListProps) => {
  const { title, children } = props;
  const element = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const nb = Math.round(width / 226);
      setColumnCount(nb > 9 ? 9 : nb);
    });
    resizeObserver.observe(element.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-xs font-bold text-gray-400 hover:underline">
          SEE ALL
        </a>
      </div>
      <div
        ref={element}
        className={`grid gap-6`}
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
      >
        {children && children.slice(0, columnCount)}
      </div>
    </div>
  );
};
