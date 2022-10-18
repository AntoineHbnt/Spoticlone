import { Album } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { Paging } from '../../types/Paging';
import { Track } from '../../types/Track';
import { TrackListRow } from '../tracklist-row/tracklist-row';
import { Card } from './card';

export interface ComponentShelfprops {
  title: string;
  link?: string;
  data: Paging<Track | Album | Artist>;
}

export const ComponentShelf = (props: ComponentShelfprops) => {
  const { title, data, link = '' } = props;
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
        {link ? (
          <NavLink to={link}>
            <h2 className="text-2xl font-bold text-white hover:underline">{title}</h2>
          </NavLink>
        ) : (
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        )}
        {link && (
          <NavLink to="" className="text-xs font-bold text-gray-400 hover:underline">
            SEE ALL
          </NavLink>
        )}
      </div>
      <div
        ref={element}
        className={`${data && data.items[0].type !== 'track' ? 'grid gap-6' : ''}`}
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
      >
        {data &&
          data.items?.map((elem: any, index: number) =>
            elem.type !== 'track' ? (
              index < columnCount && <Card key={`card-${index}`} data={elem} />
            ) : (
              <TrackListRow key={`card-${index}`} track={elem} />
            )
          )}
      </div>
    </section>
  );
};
