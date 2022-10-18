import { ComponentShelf } from '../../components/component-shelf/component-shelf';
import { TrackListRow } from '../../components/tracklist-row/tracklist-row';
import { useSearchItem } from '../../hooks/content/use-search-item';
import { queryKeys } from '../../hooks/query-keys';
import { queryClient } from '../../main';
import { SearchFromAPI } from '../../types/Search';

export const Search = () => {
  const { query } = useParams<{ query: string }>();
  const {
    refetch,
    data: searchResult,
    status,
  } = useSearchItem({
    query: query!,
    limit: 10,
    type: ['artist,track,album'],
  });

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 500);
  }, [query]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const { artists, tracks, albums } = searchResult!;

  return (
    searchResult && (
      <div className="flex flex-col gap-8 p-6">
        <ComponentShelf title="Song" data={tracks} />
        <ComponentShelf title="Album" data={albums} />
        <ComponentShelf title="Artist" data={artists} />
      </div>
    )
  );
};
