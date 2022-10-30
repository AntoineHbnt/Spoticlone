import { Album, AlbumSimplified } from '../../types/Album';
import { Artist } from '../../types/Artist';
import { Paging } from '../../types/Paging';
import { Track, TrackSimplified } from '../../types/Track';
import { TrackListRow } from '../tracklist-row/tracklist-row';
import { Card } from './card';
import { Tabs } from './tabs';

export interface Tab {
  title: string;
  data: Paging<Track | Album | Artist | TrackSimplified | AlbumSimplified | Artist>;
}

export interface ComponentShelfProps {
  title: string;
  link?: string;
  tabs?: Tab[];
  data?: Paging<Track | Album | Artist | TrackSimplified | AlbumSimplified | Artist>;
  index?: boolean;
  artist?: boolean;
  thumbnail?: boolean;
  min?: number;
  className?: string;
}

export const ComponentShelf = (props: ComponentShelfProps) => {
  const {
    artist = true,
    title,
    link = '',
    min,
    index = false,
    thumbnail,
    tabs,
    className = '',
  } = props;
  const [isDeploy, setIsDeploy] = useState<boolean>(false);
  const [columnCount, setColumnCount] = useState<number>(0);
  const [data, setData] = useState<
    Paging<Track | Album | Artist | TrackSimplified | AlbumSimplified | Artist>
  >(tabs ? tabs[0].data : props.data!);
  const element = useRef<HTMLDivElement>(null);

  const type = data!.items[0]!.type;

  useCallback(() => {
    console.log(data);
  }, [data]);

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
    <section className={`flex w-full flex-col ${className}`}>
      <div className="flex flex-col">
        <div className="mb-4 flex w-full items-center justify-between">
          {link ? (
            <NavLink to={link}>
              <h2 className="text:lg font-bold text-white hover:underline md:text-2xl">{title}</h2>
            </NavLink>
          ) : (
            <h2 className="text:lg font-bold text-white md:text-2xl">{title}</h2>
          )}
          {link && (
            <NavLink to="" className="text-xs font-bold text-gray-400 hover:underline">
              SEE ALL
            </NavLink>
          )}
        </div>
        {tabs && (
          <Tabs
            tabs={tabs}
            onChange={(index: number) => setData(tabs[index].data)}
            className="mb-4"
          />
        )}
      </div>
      {data &&
        (type !== 'track' ? (
          <div
            ref={element}
            className={`${data && data.items[0]?.type !== 'track' ? 'grid gap-6' : ''}`}
            style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
          >
            {data.items?.map(
              (elem: any, i: number) => i < columnCount && <Card key={`card-${i}`} data={elem} />
            )}
          </div>
        ) : (
          <>
            <div ref={element} className="flex flex-col">
              {data.items
                ?.slice(0, isDeploy ? data.items.length : min)
                .map((elem: any, i: number) => (
                  <TrackListRow
                    key={`track-row-${i}`}
                    thumbnail={thumbnail}
                    artist={artist}
                    index={index ? i + 1 : 0}
                    track={elem}
                  />
                ))}
            </div>
            {min !== 0 && (
              <button
                className="self-start p-4 text-xs font-bold text-[#b3b3b3] hover:underline"
                onClick={() => setIsDeploy(!isDeploy)}
              >
                {isDeploy ? 'SHOW LESS' : 'SEE MORE'}
              </button>
            )}
          </>
        ))}
    </section>
  );
};
