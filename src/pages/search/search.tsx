import { ComponentShelf } from '../../components/component-shelf/component-shelf';
import { useSearchItem } from '../../hooks/content/use-search-item';

export const Search = () => {
  const { query } = useParams<{ query: string }>();
  const { data: searchResult, status } = useSearchItem({
    query: query ? query : '',
    limit: 10,
    type: ['artist,track,album'],
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const { artists, tracks, albums } = searchResult!;
  const noResult = !artists?.items.length && !tracks?.items.length && !albums?.items.length;

  return searchResult && !noResult && query ? (
    <div className="flex flex-col gap-8 p-6">
      {tracks.items?.length && <ComponentShelf title="Song" data={tracks} />}
      {albums.items?.length && <ComponentShelf title="Album" data={albums} />}
      {artists.items?.length && <ComponentShelf title="Artist" data={artists} />}
    </div>
  ) : (
    <div className="flex h-full w-full items-center justify-center text-white">
      <span className="text-center">
        <h1 className="mb-2.5 text-2xl font-bold">No result found for "{query}"</h1>
        <p>Please make sur your words are spelled correctly or use less or different keywords</p>
      </span>
    </div>
  );
};
