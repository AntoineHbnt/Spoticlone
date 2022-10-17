import { Album } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { Paging } from '../../types/Paging';
import { Track } from '../../types/Track';
import { Card } from './card';

export interface ComponentShelfprops {
  title: string;
  data: Paging<Track | Album | Artist>;
}

export const ComponentShelf = (props: ComponentShelfprops) => {
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
    <section className="flex w-full flex-col">
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
    </section>
  );
};
