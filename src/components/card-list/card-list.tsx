import { TopArtistsParams } from '../../hooks/content/use-top-artists';
import { TopTracksParams } from '../../hooks/content/use-top-tracks';
import { Card, CardProps } from '../card/card';

export interface CardListProps {
  title: string;
  data: any;
}

export const CardList = (props: CardListProps) => {
  const { title, data } = props;
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
        <NavLink to="">
          <h2 className="text-2xl font-bold text-white hover:underline">{title}</h2>
        </NavLink>
        <NavLink to="" className="text-xs font-bold text-gray-400 hover:underline">
          SEE ALL
        </NavLink>
      </div>
      <div
        ref={element}
        className={`grid gap-6`}
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
      >
        {data &&
          data.items.map(
            (elem: any, index: number) =>
              index < columnCount && <Card key={`card-${index}`} data={elem} />
          )}
      </div>
    </div>
  );
};
